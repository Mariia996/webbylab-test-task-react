import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { fields } from './fields';
import { initialState } from './initialState';
import useForm from '../../../shared/hooks/useForm';
import { register } from '../../../redux/auth/auth-operatons';

import s from './AuthSignUp.module.scss';

const AuthSignUp = ({handleClick}) => {
    const dispatch = useDispatch();

    const onSubmit = (body) => {
        if (body.password !== body.confirmPassword) {
            toast.error(
            'Passwords don`t match. Please try again',
            { position: toast.POSITION.TOP_CENTER },
          )
        } else {
            dispatch(register(body))
        }
    }
    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

    return (
        <>
        <p className={s.formGroupText}>Fill all fields to sign up:</p>
        <form onSubmit={handleSubmit}>
            <Input {...fields.email} className={s.input} value={data.email} onChange={handleChange} />
            <Input {...fields.name} className={s.input} value={data.name} onChange={handleChange}/>
            <Input {...fields.password} className={s.input} value={data.password} onChange={handleChange}/>
            <Input {...fields.confirmPassword} className={s.input} value={data.confirmPassword} onChange={handleChange}/>
          <div className={s.buttonContainer}>
            <Button className={s.button} type="submit">Sign up</Button>
            <Button className={s.button} onClick={handleClick} type="submit">Back</Button>
          </div>
            </form>
            <ToastContainer />
        </>    );
}
 
export default AuthSignUp;