import Logo from '../../../shared/components/Logo'
import UserInfo from '../UserInfo/UserInfo';

import s from './Header.module.scss';

const Header = () => {
    return (<header className={s.header}>
        <div className={s.container}>
            <div className={s.logo_container}>
                <Logo />
            </div>
            <div className={s.userInfo_container}>
                <UserInfo />
            </div>
        </div>
    </header> );
}

export default Header;