import './Movies.css';
import Movie from '../../components/Movie/Movie';
import SearchBar from '../../components/SearchBar/SearchBar';
import Layout from '../../components/Layout/Layout';

function Movies() {
  return (
    <Layout>
      <section className="movies">
        <div className="movies__container">
          <SearchBar />
          <ul className="movies__list">
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
          </ul>
          <button className="movies__show-more-button" type="button">
            Ещё
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Movies;
