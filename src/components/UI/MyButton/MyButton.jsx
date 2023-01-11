import PropTypes from 'prop-types';
import './MyButton.css';

function MyButton({ children, cn, type }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={`my-button ${cn}`}>
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
