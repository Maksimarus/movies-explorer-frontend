import './Header.css';
import logo from '../../images/icons/logo.svg';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import MyLink from '../UI/MyLink/MyLink';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

function Header() {
  const { isAuth } = useContext(AuthContext);

  return (
    <header className="header">
      <MyLink className="header__logo" to="/">
        <img src={logo} alt="Логотип" />
      </MyLink>
      {isAuth ? <AuthNavigation /> : <Navigation />}
    </header>
  );
}

export default Header;
