import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../shared/components/Button';
import { importMovies } from '../../../redux/movies/movies-operations';

import s from './UploadFileModal.module.scss';

const UploadFileModal = () => {
    const dispatch = useDispatch();
    const [file, setFile ]= useState(null)
    
    const handleChange = (e) => {
        setFile(e.target.files[0])
    }

    const uploadAction = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('movies', file)
        dispatch(importMovies(formData))
    }
    
    return (
    <div className={s.wrapper}>
        <form className={s.form} onSubmit={uploadAction}>
          <input type="file" name="fileName" onChange={handleChange} className={s.input}></input>
          <Button className={s.btn} type="submit">Upload</Button>
        </form>     
        </div>
    );
}

export default UploadFileModal;