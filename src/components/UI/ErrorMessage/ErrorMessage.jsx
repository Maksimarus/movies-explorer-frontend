import classNames from 'classnames';
import PropTypes from 'prop-types';
import './ErrorMessage.css';

function ErrorMessage({ children, className }) {
  const classes = classNames('error-message', className);
  return <h2 className={classes}>{children}</h2>;
}

ErrorMessage.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

ErrorMessage.defaultProps = {
  children: `Во время запроса произошла ошибка. 
	Возможно, проблема с соединением или сервер недоступен. 
	Подождите немного и попробуйте ещё раз.`,
  className: '',
};

export default ErrorMessage;
