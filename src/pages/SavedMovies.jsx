import { useContext, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Layout from '../components/Layout/Layout';
import Preloader from '../components/UI/Preloader/Preloader';
import { MyLocalStorage, messages, filterMovies } from '../utils';
import MainApi from '../api/MainApi';
import { useFetching } from '../hooks';
import CurrentUserContext from '../contexts/CurrentUserContext';
import MoviesCardList from '../components/MoviesCardList/MoviesCardList';

function SavedMovies() {
  const { currentUser } = useContext(CurrentUserContext);
  const [movies, setMovies] = useState(MyLocalStorage.getItem('savedMovies'));
  const [isShort, setIsShort] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [getSavedMovies, isLoading, error] = useFetching(async () => {
    const myMovies = await MainApi.getMyMovies();
    const mySavedMovies = myMovies.filter((m) => m.owner === currentUser._id);
    MyLocalStorage.setItem('savedMovies', mySavedMovies);
    setMovies(mySavedMovies);
  });
  useEffect(() => {
    if (!movies) {
      getSavedMovies();
    }
  }, []);

  const deleteFilm = async (movieId) => {
    try {
      console.log(movieId);
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
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            error={error}
            deleteFilm={deleteFilm}
            message={messages.filmsNotFound}
          />
        )}
      </section>
    </Layout>
  );
}

export default SavedMovies;
