import { useEffect, useState } from 'react';
import './Movies.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Layout from '../../components/Layout/Layout';
import Preloader from '../../components/UI/Preloader/Preloader';
import MoviesApi from '../../api/MoviesApi';
import { useMoviesLimit, useFetching } from '../../hooks';
import {
  filterMovies,
  MyLocalStorage,
  messages,
  adaptMovie,
} from '../../utils';
import MainApi from '../../api/MainApi';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

function Movies() {
  const [movies, setMovies] = useState(MyLocalStorage.getItem('filteredFilms'));
  const [isShort, setIsShort] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchMessage, setSearchMessage] = useState(messages.inputFilmName);
  const { limit, setLimit, moviesCountAdd } = useMoviesLimit();
  const [getFilms, isLoading, error] = useFetching(async () => {
    const [films, savedFilms] = await Promise.all([
      MoviesApi.getMovies(),
      MainApi.getMyMovies(),
    ]);
    MyLocalStorage.setItem('films', films.map(adaptMovie));
    const currentUser = MyLocalStorage.getItem('user');
    const mySavedMovies = savedFilms?.filter(
      (m) => m.owner === currentUser._id
    );
    MyLocalStorage.setItem('savedMovies', mySavedMovies);
  });

  const setLikeButtonState = (movies, savedMovies) => {
    const savedMoviesIds = savedMovies.map((m) => m.movieId);
    return movies.map((m) => {
      if (savedMoviesIds.includes(m.movieId)) {
        const intersected = savedMovies.find(
          (movie) => movie.movieId === m.movieId
        );
        return { ...m, _id: intersected._id };
      } else {
        delete m._id;
        return m;
      }
    });
  };
  useEffect(() => {
    const localMovies = MyLocalStorage.getItem('films');
    const savedMovies = MyLocalStorage.getItem('savedMovies');
    const localIsShort = MyLocalStorage.getItem('isShort');
    const localSearchValue = MyLocalStorage.getItem('searchValue');
    if (!localMovies) {
      getFilms();
    }
    if (movies) {
      setIsShort(localIsShort);
      setSearchValue(localSearchValue);
    }
    if (movies && savedMovies) {
      setMovies(setLikeButtonState(movies, savedMovies));
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
    const localMovies = MyLocalStorage.getItem('films');
    const savedMovies = MyLocalStorage.getItem('savedMovies');
    const filteredMovies = filterMovies(localMovies, searchValue, isShort);
    setMovies(setLikeButtonState(filteredMovies, savedMovies));
    if (!movies?.length) setSearchMessage(messages.filmsNotFound);
  };
  const deleteMovie = async (_id) => {
    try {
      await MainApi.deleteMyMovie(_id);
      const { _id: deletedId, ...deletedMovie } = [...movies].find(
        (m) => m._id === _id
      );
      const newMoviesArray = [
        ...movies.map((m) => {
          if (m._id === deletedId) {
            return deletedMovie;
          }
          return m;
        }),
      ];
      setMovies(newMoviesArray);

      const savedMovies = MyLocalStorage.getItem('savedMovies');
      MyLocalStorage.setItem(
        'savedMovies',
        savedMovies.filter((m) => m._id !== _id)
      );
    } catch (e) {
      console.error(e);
    }
  };
  const saveMovie = async (movie) => {
    try {
      const { _id, ...movieToSave } = movie;
      const savedMovie = await MainApi.saveMyMovie(movieToSave);
      const newMoviesArray = [
        ...movies.map((m) => {
          if (m.movieId === savedMovie.movieId) {
            return { ...m, _id: savedMovie._id };
          }
          return m;
        }),
      ];
      setMovies(newMoviesArray);

      const savedMovies = MyLocalStorage.getItem('savedMovies');
      MyLocalStorage.setItem('savedMovies', [...savedMovies, savedMovie]);
    } catch (e) {
      console.error(e);
    }
  };
  const likeButtonHandler = (movie) => {
    movie._id ? deleteMovie(movie._id) : saveMovie(movie);
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
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies?.slice(0, limit)}
            likeButtonHandler={likeButtonHandler}
            error={error}
            message={searchMessage}
          />
        )}
        {movies?.length > limit && (
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
