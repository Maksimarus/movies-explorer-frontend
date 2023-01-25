import Movie from '../components/Movie/Movie';
import SearchBar from '../components/SearchBar/SearchBar';
import Layout from '../components/Layout/Layout';

function SavedMovies() {
  return (
    <Layout>
      <section className="movies">
        <SearchBar />
        <ul className="movies__list">
          {/* <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie /> */}
        </ul>
      </section>
    </Layout>
  );
}

export default SavedMovies;
