import { ReactComponent as Logout } from '../../../icons/logout.svg';

import s from './UserInfo.module.scss';

const UserInfo = () => {
    return (<div className={s.wrapper}>
        <p className={s.user}>masha.gunko96@gmail.com</p>
        <Logout className={s.logout}/>
    </div> );
}

export default UserInfo;