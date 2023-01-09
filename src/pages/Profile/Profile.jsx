import MyButton from '../../components/UI/MyButton/MyButton';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Максим!</h2>
        <form className="profile__form">
          <input type="text" />
          <input type="text" />
        </form>
        <div className="profile__buttons">
          <MyButton cn="profile__button">Редактировать</MyButton>
          <MyButton cn="profile__button profile__button_color_red">
            Выйти из аккаунта
          </MyButton>
        </div>
      </div>
    </section>
  );
}

export default Profile;
