import { useEffect, useState } from 'react';
import Movie from '../components/Movie/Movie';
import SearchBar from '../components/SearchBar/SearchBar';
import Layout from '../components/Layout/Layout';
import MainApi from '../utils/MainApi';
import { useFetching } from '../hooks/useFetching';
import Preloader from '../components/UI/Preloader/Preloader';
import ErrorMessage from '../components/UI/ErrorMessage/ErrorMessage';

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [getFilms, isLoading, error] = useFetching(async () => {
    const savedMovies = await MainApi.getMyMovies();
    setMovies(savedMovies);
  });
  useEffect(() => {
    getFilms();
  }, []);

  const deleteFilm = (filmId) => {
    console.log(filmId);
  };

  return (
    <Layout>
      <section className="movies">
        <SearchBar />
        <ul className="movies__list">
          {isLoading && <Preloader />}
          {error && <ErrorMessage />}
          {movies &&
            movies.map((movie) => (
              <Movie key={movie.id} deleteFilm={deleteFilm} {...movie} />
            ))}
        </ul>
      </section>
    </Layout>
  );
}

export default SavedMovies;
