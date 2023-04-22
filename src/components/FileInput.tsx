import { useRef } from 'react';
import './FileInput.css';

interface Props {
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FileInput({ handleFileInput }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCustomButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <div>
      <label className='file-input-label'>
        <div className='btn' onClick={handleCustomButtonClick}>
          <p className='btn-text'>Select Files</p>
        </div>
        <input
          accept='.pdf'
          type='file'
          multiple
          onChange={handleFileInput}
          ref={fileInputRef}
        />
      </label>
    </div>
  );
}
export default FileInput;
