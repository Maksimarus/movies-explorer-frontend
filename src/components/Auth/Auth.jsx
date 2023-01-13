import PropTypes from 'prop-types';
import './Auth.css';
import MyLink from '../UI/MyLink/MyLink';
import logo from '../../images/icons/logo.svg';

function Auth({ children, title }) {
  return (
    <section className="auth">
      <div className="auth__container">
        <MyLink link="/">
          <img className="auth__logo" src={logo} alt="Логотип" />
        </MyLink>
        <h2 className="auth__title">{title}</h2>
        <form className="auth__form">{children}</form>
      </div>
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
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default Auth;
