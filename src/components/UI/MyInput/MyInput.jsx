import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './MyInput.css';

const MyInput = React.forwardRef(({ label, error, ...props }, ref) => {
  return (
    <>
      <div className="my-input">
        <label className="my-input__label" htmlFor="input">
          {label}
        </label>
        <input className="my-input__input" ref={ref} {...props} />
      </div>
      <span className={classNames('my-input__error', { active: error })}>
        {error && error.message}
      </span>
    </>
  );
});

MyInput.defaultProps = {
  label: '',
};

MyInput.propTypes = {
  label: PropTypes.string,
};

export default MyInput;
