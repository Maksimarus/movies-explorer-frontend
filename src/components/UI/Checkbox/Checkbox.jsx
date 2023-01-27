import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Checkbox.css';

function Checkbox({ className, filterMovies }) {
  const [isChecked, setIsChecked] = useState(false);
  const classes = classNames('checkbox', className);
  const handleChange = () => {
    filterMovies(isChecked);
    setIsChecked((prev) => !prev);
  };
  return (
    <label className={classes} htmlFor="movie-type">
      <input
        onChange={handleChange}
        className="checkbox__input"
        id="movie-type"
        type="checkbox"
        checked={isChecked}
      />
      <span className="checkbox__visible" />
      <span className="checkbox__text">Короткометражки</span>
    </label>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
};

export default Checkbox;
