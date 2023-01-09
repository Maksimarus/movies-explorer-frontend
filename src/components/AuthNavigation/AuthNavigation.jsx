import './AuthNavigation.css';
import MyLink from '../UI/MyLink/MyLink';

function AuthNavigation() {
  return (
    <nav className="auth-nav">
      <ul className="auth-nav__list">
        <li className="auth-nav__item">
          <MyLink link="/movies">Фильмы</MyLink>
        </li>
        <li className="auth-nav__item">
          <MyLink link="/saved-movies">Сохранённые фильмы</MyLink>
        </li>
        <li className="auth-nav__item auth-nav__item_type_account">
          <MyLink link="/profile">Аккаунт</MyLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNavigation;
