/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import './MyInput.css';

function MyInput({ label, ...props }) {
  return (
    <div className="my-input">
      <label className="my-input__label" htmlFor="input">
        {label}
      </label>
      <input className="my-input__input" {...props} />
    </div>
  );
}

MyInput.defaultProps = {
  label: '',
};

MyInput.propTypes = {
  label: PropTypes.string,
};

export default MyInput;
