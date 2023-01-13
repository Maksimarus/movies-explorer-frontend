/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import './MyButton.css';

function MyButton({ children, cn, type, ...props }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} {...props} className={`my-button ${cn}`}>
      {children}
    </button>
  );
}

MyButton.defaultProps = {
  type: 'button',
  cn: '',
  children: null,
};

MyButton.propTypes = {
  type: PropTypes.string,
  cn: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default MyButton;
