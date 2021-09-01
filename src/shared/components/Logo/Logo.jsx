import { NavLink } from 'react-router-dom';
import s from './Logo.module.scss';

const Logo = () => {
    return (<div className={s.logo}>
        <NavLink to={"/"} className={s.logo_link}>
           <span className={s.logo_link_firstLetter}>M</span>ovies</NavLink>
    </div> );
}

export default Logo;