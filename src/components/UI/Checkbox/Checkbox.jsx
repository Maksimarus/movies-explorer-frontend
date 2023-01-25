import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Checkbox.css';

function Checkbox({ className }) {
  const classes = classNames('checkbox', className);

  return (
    <label className={classes} htmlFor="movie-type">
      <input className="checkbox__input" id="movie-type" type="checkbox" />
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
