import { useEffect, useState } from 'react';
import './Movies.css';
import Movie from '../../components/Movie/Movie';
import SearchBar from '../../components/SearchBar/SearchBar';
import Layout from '../../components/Layout/Layout';
import Preloader from '../../components/UI/Preloader/Preloader';
import MoviesApi from '../../api/MoviesApi';
import { useMoviesLimit, useFetching } from '../../hooks';
import { filterMovies, MyLocalStorage, messages } from '../../utils';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchMessage, setSearchMessage] = useState(messages.inputFilmName);
  const { limit, setLimit, moviesCountAdd } = useMoviesLimit();
  const [getFilms, isLoading, error] = useFetching(async () => {
    const films = await MoviesApi.getMovies();
    MyLocalStorage.setItem('films', films);
  });
  const localMovies = MyLocalStorage.getItem('films');

  useEffect(() => {
    if (!localMovies) {
      getFilms();
    }
    const prevMovies = MyLocalStorage.getItem('filteredFilms');
    const localIsShort = MyLocalStorage.getItem('isShort');
    const localSearchValue = MyLocalStorage.getItem('searchValue');
    if (prevMovies) {
      setMovies(prevMovies);
      setIsShort(localIsShort);
      setSearchValue(localSearchValue);
    }
  }, []);
  useEffect(() => {
    MyLocalStorage.setItem('filteredFilms', movies);
    MyLocalStorage.setItem('isShort', isShort);
    MyLocalStorage.setItem('searchValue', searchValue);
  }, [movies, isShort, searchValue]);
  const showMoreFilms = () => {
    setLimit(limit + moviesCountAdd);
  };

  const searchFilms = () => {
    const filteredMovies = filterMovies(localMovies, searchValue, isShort);
    setMovies(filteredMovies);
    if (!movies.length) setSearchMessage(messages.filmsNotFound);
  };
  const likeFilm = (filmId) => {
    console.log(filmId);
  };

  return (
    <Layout>
      <section className="movies">
        <SearchBar
          isShort={isShort}
          setIsShort={setIsShort}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchFilms={searchFilms}
        />
        {isLoading && <Preloader />}
        {error && (
          <h2 className="movie__error">{messages.defaultErrorMessage}</h2>
        )}
        <ul className="movies__list">
          {movies.length ? (
            movies
              .slice(0, limit)
              .map((movie) => (
                <Movie key={movie.id} likeFilm={likeFilm} {...movie} />
              ))
          ) : (
            <h2 className="movies__message">{searchMessage}</h2>
          )}
        </ul>
        {movies.length > limit && (
          <button
            onClick={showMoreFilms}
            className="movies__show-more-button"
            type="button"
          >
            Ещё
          </button>
        )}
      </section>
    </Layout>
  );
}

export default Movies;
