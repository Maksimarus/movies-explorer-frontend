/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../UI/Burger/Burger';
import './AuthNavigation.css';

function AuthNavigation() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const onClickBurger = () => {
    setIsVisibleMenu((prev) => !prev);
  };

  return (
    <nav className="auth-nav">
      <Burger onClickBurger={onClickBurger} isVisibleMenu={isVisibleMenu} />
      <ul className={classNames('menu', { active: isVisibleMenu })}>
        <li className="menu__item">
          <NavLink className="menu__link" to="/movies">
            Фильмы
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink className="menu__link" to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="menu__item menu__item_type_account">
          <NavLink className="menu__link" to="/profile">
            Аккаунт
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNavigation;
