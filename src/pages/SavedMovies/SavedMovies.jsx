import Movie from '../../components/Movie/Movie';
import SearchBar from '../../components/SearchBar/SearchBar';
import Layout from '../../components/Layout/Layout';

function SavedMovies() {
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
        </div>
      </section>
    </Layout>
  );
}

export default SavedMovies;
