import { useState } from 'react'

import { PDFDocument } from 'pdf-lib';
import './App.css';
import FileInput from './components/FileInput';
import CombineButton from './components/CombineButton';
import FileItem from './components/FileItem';
import Footer from './components/Footer';

function App() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files ?? []);
    setFiles(prev => [...prev, ...selectedFiles.reverse()]);
  };

  const handleCombineButtonClick = async () => {
    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const fileData = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileData);

      const copiedPages = await mergedPdf.copyPages(
        pdfDoc,
        pdfDoc.getPageIndices(),
      );

      copiedPages.forEach(page => {
        mergedPdf.addPage(page);
      });
    }

    const pdfBytes = await mergedPdf.save();
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);

    window.open(pdfUrl);
  };

  const handleDeletePdf = (index: number) => {
    setFiles(prevFiles => {
      const filesCopy = [...prevFiles];
      filesCopy.splice(index, 1);
      return filesCopy;
    });
  };

  return (
    <div className='main'>
      <div className='container'>
        <h1>PDF Merge</h1>
        <p>or</p>
        <h3>How I spent an afternoon refusing to pay for an Adobe License</h3>
        {files.length === 0 && <FileInput handleFileInput={handleFileInput} />}
        <FileItem files={files} onDelete={handleDeletePdf} />
        {files.length >= 1 && (
          <CombineButton mergePdf={handleCombineButtonClick} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App
