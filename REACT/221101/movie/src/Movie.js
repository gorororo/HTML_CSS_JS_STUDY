import { Link } from "react-router-dom";
import './Movie.css';

const Movie = (props) => {
    const POSTER_URL = "https://image.tmdb.org/t/p/original";
    let { id, title, poster, release, avg, } = props;

    const date = release.split('-');
    
    return (
        <div className="movie-item">
            <Link to={`/about/${id}`}>
                <img className="poster" src={POSTER_URL + poster} alt={title} />
            </Link>
            <h3>
                <Link to={`/about/${id}`}>{title}</Link>
            </h3>
            <p>{`${date[1]} 월 ${date[2]}, ${date[0]}`}</p>
            <p className="avg">{Math.round(avg)*10 + '%' }</p>
        </div>
    );
};

export default Movie;