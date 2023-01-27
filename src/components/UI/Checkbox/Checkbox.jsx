import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Checkbox.css';

function Checkbox({ className, isShort, setIsShort }) {
  const classes = classNames('checkbox', className);
  const handleChange = (e) => {
    setIsShort(e.target.checked);
  };

  return (
    <label className={classes} htmlFor="movie-type">
      <input
        onChange={handleChange}
        className="checkbox__input"
        id="movie-type"
        type="checkbox"
        checked={isShort}
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
