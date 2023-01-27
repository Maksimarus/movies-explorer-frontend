import Checkbox from '../UI/Checkbox/Checkbox';
import './SearchBar.css';

function SearchBar({ filterMovies }) {
  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <fieldset className="search-bar__container">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="search-bar__button" type="submit" />
        </fieldset>
        <Checkbox
          className="search-bar__checkbox"
          filterMovies={filterMovies}
        />
      </form>
    </div>
  );
}

export default SearchBar;
