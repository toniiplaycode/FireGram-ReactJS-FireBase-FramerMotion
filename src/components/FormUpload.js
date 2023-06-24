import {useState} from 'react';
import ProgressBar from './ProgressBar';

const FormUpload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/webp'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg) !')
        }
    }

    return(
        <div>
            <label className='my-2'>
                <input type="file" onChange={handleChange}/>+
            </label>
            <div>
                {error && <div className='error text-danger'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div> 
        </div>
    )
}

export default FormUpload;