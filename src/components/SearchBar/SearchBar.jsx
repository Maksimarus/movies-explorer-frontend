import './SearchBar.css';
import Checkbox from '../UI/Checkbox/Checkbox';

function SearchBar({
  isShort,
  setIsShort,
  searchValue,
  setSearchValue,
  searchFilms,
}) {
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const onSubmitSearch = (e) => {
    e.preventDefault();
    searchFilms(searchValue);
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={onSubmitSearch}>
        <fieldset className="search-bar__container">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Фильм"
            required
            value={searchValue}
            onChange={onChangeSearch}
          />
          <button className="search-bar__button" type="submit" />
        </fieldset>
        <Checkbox
          className="search-bar__checkbox"
          checked={isShort}
          setIsShort={setIsShort}
        />
      </form>
    </div>
  );
}

export default SearchBar;
