import './Navigation.css';
import MyLink from '../UI/MyLink/MyLink';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <MyLink link="/signup">Регистрация</MyLink>
        </li>
        <li className="nav__item nav__item_type_auth">
          <MyLink link="/signin">Войти</MyLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
