import { useContext, useEffect, useState } from 'react';
import Movie from '../components/Movie/Movie';
import SearchBar from '../components/SearchBar/SearchBar';
import Layout from '../components/Layout/Layout';
import Preloader from '../components/UI/Preloader/Preloader';
import { MyLocalStorage, messages, filterMovies } from '../utils';
import MainApi from '../api/MainApi';
import { useFetching } from '../hooks';
import { errorMessages } from '../validation/validation';
import CurrentUserContext from '../contexts/CurrentUserContext';

function SavedMovies() {
  const { currentUser } = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const savedMovies = MyLocalStorage.getItem('savedMovies');
  const { getSavedMovies, isLoading, error } = useFetching(async () => {
    const myMovies = await MainApi.getMyMovies();
    const mySavedMovies = myMovies.filter((m) => m.owner === currentUser._id);
    setMovies(mySavedMovies);
  });
  useEffect(() => {
    savedMovies ? setMovies(savedMovies) : getSavedMovies();
  }, []);

  const deleteFilm = async (movieId) => {
    try {
      await MainApi.deleteMyMovie(movieId);
      const newMoviesArray = [...movies].filter((m) => m._id !== movieId);
      setMovies(newMoviesArray);
      MyLocalStorage.setItem('savedMovies', newMoviesArray);
    } catch (e) {
      console.error(e);
    }
  };

  const searchFilms = () => {
    const savedMovies = MyLocalStorage.getItem('savedMovies');
    const filteredMovies = filterMovies(savedMovies, searchValue, isShort);
    setMovies(filteredMovies);
  };

  return (
    <Layout>
      <section className="movies">
        <SearchBar
          searchFilms={searchFilms}
          isShort={isShort}
          setIsShort={setIsShort}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <ul className="movies__list">
          {isLoading && <Preloader />}
          {error && (
            <h2 className="movie__error">
              {errorMessages.defaultErrorMessage}
            </h2>
          )}
          {movies?.length ? (
            movies.map((movie) => (
              <Movie
                key={movie.movieId}
                deleteFilm={deleteFilm}
                movie={movie}
              />
            ))
          ) : (
            <h2 className="movies__message">{messages.filmsNotFound}</h2>
          )}
        </ul>
      </section>
    </Layout>
  );
}

export default SavedMovies;
