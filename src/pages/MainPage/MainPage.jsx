import MenuPanel from '../../client/components/MenuPanel';
import MovieList from '../../client/components/MovieList';

import s from './MainPage.module.scss';

const MainPage = () => {
    return (<div className={s.container}>
            <div className={s.menuPanel_container}>
                <MenuPanel />
            </div>
            <div className={s.movieList_container}>
                <MovieList />
            </div>
    </div> );
}

export default MainPage;