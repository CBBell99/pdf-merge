interface FileInputProps {
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FileInput({ handleFileInput }: FileInputProps) {
  return (
    <div>
      <label className='file-input-label'>
        <input accept='.pdf' type='file' multiple onChange={handleFileInput} />
      </label>
    </div>
  );
}
export default FileInput;
