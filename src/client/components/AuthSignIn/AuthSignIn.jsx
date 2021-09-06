import { useDispatch } from 'react-redux';

import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { fields } from './fields';
import { initialState } from './initialState';
import useForm from '../../../shared/hooks/useForm';
import { login } from '../../../redux/auth/auth-operatons';

import s from './AuthSignIn.module.scss';

const AuthSignIn = ({handleClick}) => {
    const dispatch = useDispatch();

    const onSubmit = (body) => {
        dispatch(login(body))
    }

    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });
    return (<>
        <p className={s.formGroupText}>Fill all fields to sign in:</p>
        <form onSubmit={handleSubmit}>
          <Input {...fields.email} className={s.input} value={data.email} onChange={handleChange} />
          <Input {...fields.password} className={s.input} value={data.password} onChange={handleChange}/>
          <div className={s.buttonContainer}>
                <Button className={s.button} type="submit">Sign in</Button>
                <Button className={s.button} onClick={handleClick} type="submit">Back</Button>
          </div>
            </form>
        </>);
}
 
export default AuthSignIn;