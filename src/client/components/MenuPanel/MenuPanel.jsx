import { useState } from 'react';
import { v4 } from 'uuid';
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { fields } from './fields';
import Modal from '../../../shared/components/Modal';
import UploadFileModal from '../UploadFileModal/UploadFileModal';

import s from './MenuPanel.module.scss';

const MenuPanel = () => {
    const [selectValue, setselectValue] = useState('Title');
    const [inputValue, setinputValue] = useState('');
    const [toggle, setToggle] = useState(false);

    const handleChange = ({ target }) => {
        const { value } = target;
        setinputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }



    const { filter } = fields;
    return (<div className={s.wrapper}>
        <ul className={s.btn_list}>
            <li key={v4()} className={s.btn_item}>
                <Button className={s.btn}>All movies</Button>
            </li>
            <li key={v4()} className={s.btn_item}>
                <Button className={s.btn}>Your movies</Button>
            </li>
            <li key={v4()} className={s.btn_item}>
                <Button className={s.btn} onClick={() => setToggle(!toggle)}>Upload movies</Button>
            </li>
        </ul>
        <div className={s.filter_container}>
            <div className={s.select_container} >
                <label htmlFor="filter"className={s.select_label}>Find the movie by</label>
                <select name="filter" id="filter" className={s.select}
                    value={selectValue}
                    onChange={e => setselectValue(e.target.value)}>
                    <option key={v4()} value="Title">Name</option>
                    <option key={v4()} value="Stars">Actor</option>
                </select>
            </div>
            <form className={s.input_container} onSubmit={handleSubmit}>
                <Input
                    className={s.input}
                    placeholder={filter.placeholder}
                    name={filter.name}
                    value={inputValue}
                    onChange={handleChange} />
                <Button type="submit" className={s.input_btn}>Find</Button>
            </form>
        </div>
        <Modal onClose={() => setToggle(!toggle)} className={toggle ? s.openModal : ''}>
            <UploadFileModal />
        </Modal>
    </div> );
}

export default MenuPanel;