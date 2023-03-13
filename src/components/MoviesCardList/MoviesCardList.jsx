import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
import { errorMessages } from '../../validation/validation';

function MoviesCardList({
  movies,
  error,
  likeButtonHandler,
  deleteFilm,
  message,
}) {
  if (error) {
    return (
      <h2 className="movie__error">{errorMessages.defaultErrorMessage}</h2>
    );
  }
  return (
    <ul className="movies__list">
      {movies?.length ? (
        movies.map((movie) => (
          <Movie
            key={movie.movieId}
            likeButtonHandler={likeButtonHandler}
            deleteFilm={deleteFilm}
            movie={movie}
          />
        ))
      ) : (
        <h2 className="movies__message">{message}</h2>
      )}
    </ul>
  );
}

MoviesCardList.propTypes = {
  movies: PropTypes.arrayOf({
    _id: PropTypes.string,
    country: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    year: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    trailerLink: PropTypes.string,
    thumbnail: PropTypes.string,
    movieId: PropTypes.number,
    nameRU: PropTypes.string,
    nameEN: PropTypes.string,
  }),
  likeButtonHandler: PropTypes.func,
  deleteFilm: PropTypes.func,
  error: PropTypes.object,
  message: PropTypes.string,
};

MoviesCardList.defaultProps = {
  movies: [],
  likeButtonHandler: null,
  deleteFilm: null,
  error: null,
  message: '',
};

export default MoviesCardList;
