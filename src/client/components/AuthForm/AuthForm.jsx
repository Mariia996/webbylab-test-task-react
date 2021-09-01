import { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { fields } from './fields';
import { initialState } from './initialState';
import useForm from '../../../shared/hooks/useForm';
import s from './AuthForm.module.scss';

const AuthForm = () => {
    const [actionType, setActionType] = useState('');
    // const dispatch = useDispatch();

     const onSubmit = data => {
    // const action = actionType === 'login' ? logIn(data) : register(data);
    // dispatch(action);
  };

     const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

    return (  <div className={s.authFormContainer}>
      <div className={s.formGroup}>
        <p className={s.formGroupText}>Login to our app using e-mail and password:</p>
        <form onSubmit={handleSubmit}>
          <Input {...fields.email} value={data.email} onChange={handleChange} className={s.inputEmail}/>
          <Input {...fields.password} value={data.password} onChange={handleChange}/>
          <div className={s.buttonContainer}>
            <Button className={s.button} type="submit" onClick={() => setActionType('login')}>Sign in</Button>
            <Button className={s.button} type="submit" onClick={() => setActionType('register')}>Sign up</Button>
          </div>
        </form>
      </div>
    </div> );
}

export default AuthForm;