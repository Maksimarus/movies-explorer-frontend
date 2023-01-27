import { useEffect, useState } from 'react';
import './Movies.css';
import Movie from '../../components/Movie/Movie';
import SearchBar from '../../components/SearchBar/SearchBar';
import Layout from '../../components/Layout/Layout';
import Preloader from '../../components/UI/Preloader/Preloader';
import MoviesApi from '../../utils/MoviesApi';
import { useMoviesLimit } from '../../hooks/useMoviesLimit';
import { filterMovieDuration } from '../../utils/filterMovieDuration';
import { useFetching } from '../../hooks/useFetching';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const { limit, setLimit, moviesCount } = useMoviesLimit();
  const [getFilms, isLoading, error] = useFetching(async () => {
    const films = await MoviesApi.getMovies();
    setMovies(films);
    setFilteredMovies(films);
  });
  useEffect(() => {
    getFilms();
  }, []);

  const showMoreFilms = () => {
    setLimit(limit + moviesCount);
  };
  const filterMovies = (checked) => {
    checked
      ? setFilteredMovies(movies)
      : setFilteredMovies(filterMovieDuration);
  };

  return (
    <Layout>
      <section className="movies">
        <SearchBar filterMovies={filterMovies} />
        {error && <ErrorMessage />}
        {isLoading && <Preloader />}
        <ul className="movies__list">
          {filteredMovies.slice(0, limit).map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </ul>
        <button
          onClick={showMoreFilms}
          className="movies__show-more-button"
          type="button"
        >
          Ещё
        </button>
      </section>
    </Layout>
  );
}

export default Movies;
