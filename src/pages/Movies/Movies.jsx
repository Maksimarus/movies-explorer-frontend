import { useEffect, useState } from 'react';
import './Movies.css';
import Movie from '../../components/Movie/Movie';
import SearchBar from '../../components/SearchBar/SearchBar';
import Layout from '../../components/Layout/Layout';
import Preloader from '../../components/UI/Preloader/Preloader';
import MoviesApi from '../../utils/MoviesApi';
import { useMoviesLimit } from '../../hooks/useMoviesLimit';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { limit, setLimit, moviesCount } = useMoviesLimit();
  useEffect(() => {
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const films = await MoviesApi.getMovies();
        setMovies(films);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getFilms();
  }, []);

  const showMoreFilms = () => {
    setLimit(limit + moviesCount);
  };

  return (
    <Layout>
      <section className="movies">
        <SearchBar />
        {isLoading ? (
          <Preloader />
        ) : (
          <ul className="movies__list">
            {movies.slice(0, limit).map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </ul>
        )}
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
