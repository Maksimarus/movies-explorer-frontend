import PropTypes from 'prop-types';
import './Auth.css';
import MyLink from '../UI/MyLink/MyLink';
import logo from '../../images/icons/logo.svg';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';

function Auth({ children, title, error, ...props }) {
  return (
    <section className="auth">
      <MyLink to="/" className="auth__logo">
        <img src={logo} alt="Логотип" />
      </MyLink>
      <h2 className="auth__title">{title}</h2>
      {error && <ErrorMessage className="auth__error">{}</ErrorMessage>}
      <form className="auth__form" {...props}>
        {children}
      </form>
    </section>
  );
}

Auth.defaultProps = {
  title: '',
  children: null,
};

Auth.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Auth;
