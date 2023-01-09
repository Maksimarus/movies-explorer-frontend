import './Movies.css';
import Movie from '../../components/Movie/Movie';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';

function Movies() {
  return (
    <>
      <main className="movies">
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
          <div className="show-more">
            <button className="show-more__button" type="button">
              Ещё
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
