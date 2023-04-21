import React from 'react';

interface Props {
  files: File[];
}

function FileViewer({ files }: Props) {
  console.log('viewer', files);

  return (
    <div>
      {files.map(file => (
        <div key={file.name}>{file.name}</div>
      ))}
    </div>
  );
}

export default FileViewer;
