import { useDispatch } from 'react-redux';
import { ReactComponent as Logout } from '../../../icons/logout.svg';
import { logout } from '../../../redux/auth/auth-operatons';
import s from './UserInfo.module.scss';

const UserInfo = () => {
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch(logout())
    }
    return (<div className={s.wrapper}>
        <Logout onClick={handleClick} className={s.logout}/>
    </div> );
}

export default UserInfo;