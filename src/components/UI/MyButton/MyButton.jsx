import classNames from 'classnames';
import PropTypes from 'prop-types';
import './MyButton.css';

function MyButton({ children, className, ...props }) {
  const classes = classNames('my-button', className);

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}

MyButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MyButton.defaultProps = {
  className: '',
  children: 'button',
};

export default MyButton;
