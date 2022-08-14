import { movies } from "./data/movies";
import Movie from "./movie";
import './movies.css';
const fetchMovieDaram = () => {
    return movies
}

 const MovieComponent = () => {
    const movieData = fetchMovieDaram();
    return(
        <div className='movie-container'>
            <h2>movies</h2>
            <ul className="movie-list">
                {
                    movieData.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))
                }
            </ul>
        </div>
    );
 };

 export default MovieComponent;