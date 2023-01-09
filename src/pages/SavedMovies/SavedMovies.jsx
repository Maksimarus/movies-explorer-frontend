import Movie from '../../components/Movie/Movie';
import SearchBar from '../../components/SearchBar/SearchBar';

function SavedMovies() {
  return (
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
  );
}

export default SavedMovies;
