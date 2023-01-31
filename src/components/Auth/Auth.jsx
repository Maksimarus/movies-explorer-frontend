import PropTypes from 'prop-types';
import './Auth.css';
import MyLink from '../UI/MyLink/MyLink';
import logo from '../../images/icons/logo.svg';
import MyButton from '../UI/MyButton/MyButton';
import { errorMessages } from '../../validation/validation';
import { messages } from '../../utils';

function Auth({
  children,
  title,
  error,
  isLoading,
  btnText,
  text,
  linkText,
  link,
  isValid,
  ...props
}) {
  const errorMessage = errorMessages[error?.toString()];
  return (
    <section className="auth">
      <MyLink to="/" className="auth__logo">
        <img src={logo} alt="Логотип" />
      </MyLink>
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" {...props}>
        {children}
        {error && (
          <h2 className="auth__error">
            {errorMessage || messages.defaultErrorMessage}
          </h2>
        )}
        <div className="auth__controls">
          <MyButton
            type="submit"
            className="auth__button"
            disabled={!isValid || isLoading}
          >
            {btnText}
          </MyButton>
          <p className="auth__text">
            {text}
            <MyLink className="auth__link" to={link}>
              {linkText}
            </MyLink>
          </p>
        </div>
      </form>
    </section>
  );
}

Auth.defaultProps = {
  title: '',
  children: null,
  error: null,
  isLoading: false,
  btnText: '',
  text: '',
  linkText: '',
  link: '',
};

Auth.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.number,
  isLoading: PropTypes.bool,
  btnText: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string,
};

export default Auth;
