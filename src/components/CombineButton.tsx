import './CombineButton.css';

interface Props {
  mergePdf: () => void;
}

function CombineButton({ mergePdf }: Props) {
  return (
    <div className='btn' onClick={mergePdf}>
      <p className='btn-text'>Merge PDFs</p>
    </div>
  );
}

export default CombineButton;
