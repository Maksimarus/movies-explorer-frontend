import PropTypes from 'prop-types';
import './ErrorMessage.css';

function ErrorMessage({ children }) {
  return <h2 className="error-message">{children}</h2>;
}

ErrorMessage.propTypes = {
  children: PropTypes.string,
};

ErrorMessage.defaultProps = {
  children: `Во время запроса произошла ошибка. 
	Возможно, проблема с соединением или сервер недоступен. 
	Подождите немного и попробуйте ещё раз.`,
};

export default ErrorMessage;
