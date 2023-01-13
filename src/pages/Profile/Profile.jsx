import './Profile.css';
import MyButton from '../../components/UI/MyButton/MyButton';
import Header from '../../components/Header/Header';

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Максим!</h2>
        <form className="profile__form">
          <label htmlFor="name" className="profile__item">
            <span className="profile__item-text">Имя</span>
            <input
              id="name"
              type="text"
              className="profile__item-input"
              placeholder="Максим"
            />
          </label>
          <label htmlFor="name" className="profile__item">
            <span className="profile__item-text">E-mail</span>
            <input
              id="name"
              type="email"
              className="profile__item-input"
              placeholder="pochta@yandex.ru"
            />
          </label>
          <div className="profile__buttons">
            <MyButton type="submit" cn="profile__button">
              Редактировать
            </MyButton>
            <MyButton cn="profile__button profile__button_color_red">
              Выйти из аккаунта
            </MyButton>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
