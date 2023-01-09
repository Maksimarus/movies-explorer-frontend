import PropTypes from 'prop-types';
import './MyButton.css';

function MyButton({ children, cn }) {
  return (
    <button type="button" className={`my-button ${cn}`}>
      {children}
    </button>
  );
}

MyButton.defaultProps = {
  cn: '',
  children: null,
};

MyButton.propTypes = {
  cn: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default MyButton;
