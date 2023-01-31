import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import MyButton from '../../components/UI/MyButton/MyButton';
import Header from '../../components/Header/Header';
import AuthContext from '../../contexts/AuthContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import MainApi from '../../api/MainApi';

function Profile() {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  const { currentUser } = useContext(CurrentUserContext);

  const logout = () => {
    MainApi.logout();
  };

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Максим!</h2>
        <form className="profile-form">
          <label htmlFor="name" className="profile-form__item">
            <span className="profile-form__text">Имя</span>
            <input
              id="name"
              type="text"
              className="profile-form__input"
              placeholder="Максим"
            />
          </label>
          <label htmlFor="name" className="profile-form__item">
            <span className="profile-form__text">E-mail</span>
            <input
              id="name"
              type="email"
              className="profile-form__input"
              placeholder="pochta@yandex.ru"
            />
          </label>
          <div className="profile-form__buttons">
            <MyButton type="submit" className="profile-form__button">
              Редактировать
            </MyButton>
            <MyButton
              type="button"
              className="profile-form__button profile-form__button_color_red"
            >
              Выйти из аккаунта
            </MyButton>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
