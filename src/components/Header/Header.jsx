import './Header.css';
import logo from '../../images/icons/logo.svg';
// import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import MyLink from '../UI/MyLink/MyLink';

function Header() {
  return (
    <header className="header">
      <MyLink className="header__logo" to="/">
        <img src={logo} alt="Логотип" />
      </MyLink>
      {/* <Navigation /> */}
      <AuthNavigation />
    </header>
  );
}

export default Header;
