import { useState } from 'react'

import './App.css'
import FileInput from './components/FileInput';

function App() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files ?? []);
    setFiles(prev => [...prev, ...selectedFiles]);
    console.log(selectedFiles);
  };

  return (
    <div>
      <h1>PDF Merge</h1>
      <FileInput handleFileInput={handleFileInput} />
    </div>
  );
}

export default App
