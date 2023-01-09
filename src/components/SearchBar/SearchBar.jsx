import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <form>
        <div>
          <input type="submit" />
          <button type="submit">123</button>
        </div>
        <div>
          <label htmlFor="movieLength">
            <input id="movieLength" type="checkbox" />
            Короткометражки
          </label>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
