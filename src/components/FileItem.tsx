import './FileItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

type Props = {
  files: File[];
  onDelete: (index: number) => void;
};

function FileItem({ files, onDelete }: Props) {
  console.log('viewer', files);

  const pdfFiles = files.map((file, index) => (
    <div key={file.name} className='outer-container' draggable>
      <div className='inner-container'>
        <h3>
          {file.name.length > 35 ? `${file.name.slice(0, 34)}...` : file.name}
        </h3>
        <FontAwesomeIcon
          icon={faTrashCan}
          className='icon'
          onClick={() => onDelete(index)}
        />
      </div>
    </div>
  ));

  return <div>{pdfFiles}</div>;
}

export default FileItem;
