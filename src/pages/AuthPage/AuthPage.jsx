import AuthForm from '../../client/components/AuthForm';

import s from './AuthPage.module.scss';

const AuthPage= () => {
    return (  <div className={`${s.authPageContainer} ${s.container} `}>
        <div className={s.wrapper}>
            <h1 className={s.title}>Welcome to movies!</h1>
                    <AuthForm/>
                </div>
            </div> );
}

export default AuthPage;