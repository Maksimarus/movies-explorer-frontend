import { SHORT_MOVIE_DURATION } from './constants';

const filterMovies = (movies, searchValue, isShort) => {
  let filteredMovies = movies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
  );
  if (isShort) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.duration < SHORT_MOVIE_DURATION
    );
  }
  return filteredMovies;
};

export default filterMovies;
