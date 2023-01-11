import './Checkbox.css';

function Checkbox() {
  return (
    <label className="checkbox" htmlFor="movie-type">
      <input className="checkbox__input" id="movie-type" type="checkbox" />
      <span className="checkbox__visible" />
      <span className="checkbox__text">Короткометражки</span>
    </label>
  );
}

export default Checkbox;
