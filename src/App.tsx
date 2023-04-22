import { useState } from 'react'

import './App.css'
import FileInput from './components/FileInput';
import CombineButton from './components/CombineButton';
import FileViewer from './components/FileViewer';
import { PDFDocument } from 'pdf-lib';

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

  return (
    <div className='main'>
      <h1>PDF Merge</h1>
      {files.length === 0 && <FileInput handleFileInput={handleFileInput} />}
      <FileViewer files={files} />
      {files.length >= 1 && (
        <CombineButton mergePdf={handleCombineButtonClick} />
      )}
      {/* <CombineButton mergePdf={handleCombineButtonClick} /> */}
    </div>
  );
}

export default App
