type FileInputProps = {
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FileInput({ handleFileInput }: FileInputProps) {
  return (
    <label className='file-input-label'>
      <input accept='.pdf' type='file' multiple onChange={handleFileInput} />
    </label>
  );
}
export default FileInput;
