import { useState } from 'react';
import AuthSignUp from '../AuthSignUp/AuthSignUp';
import AuthSignIn from '../AuthSignIn/AuthSignIn';
import Button from '../../../shared/components/Button';

import s from './AuthForm.module.scss';

const AuthForm = () => {
    const [actionType, setActionType] = useState('');

    return (  <div className={s.authFormContainer}>
      <div className={s.formGroup}>
        {!actionType && <div className={s.choiceContainer}><p className={s.formGroupText}>You need to sign up or sign in:</p>
        <div>
          <Button className={s.button} onClick={() => setActionType('login')}>Sign in</Button>
          <Button className={s.button} onClick={() => setActionType('register')}>Sign up</Button>
        </div>
        </div>}
        {actionType === 'register' && <AuthSignUp handleClick={() => setActionType('')} />}
        {actionType === 'login' && <AuthSignIn handleClick={() => setActionType('')} />}
      </div>
    </div> );
}

export default AuthForm;