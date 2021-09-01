import Button from '../../../shared/components/Button';

import s from './MovieList.module.scss';

const MovieList = () => {
    return (
    <ul className={s.movieList}>
        <li className={s.movieItem}>
            <p className={s.movieItem_title}>Title: <span className={s.movieItem_text}>Casablanca</span></p>
            <p className={s.movieItem_title}>Release Year: <span className={s.movieItem_text}>1942</span></p>
            <p className={s.movieItem_title}>Format: <span className={s.movieItem_text}>DVD</span></p>
            <p className={s.movieItem_title}>Stars:
                <ul className={s.starts_list}>
                    <li className={s.stars_item}>Humphrey Bogart</li>
                    <li className={s.stars_item}>Ingrid Bergman</li>
                    <li className={s.stars_item}>Claude Rains</li>
                    <li className={s.stars_item}>Peter Lorre</li>
                </ul>
                </p>
                <div className={s.btn_container}>
                    <Button className={s.btn}>Add movie</Button>
                </div>
        </li>
    </ul> );
}

export default MovieList;