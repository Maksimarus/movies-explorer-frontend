import Auth from '../../components/Auth/Auth';
import MyInput from '../../components/UI/MyInput/MyInput';
import MyButton from '../../components/UI/MyButton/MyButton';
import MyLink from '../../components/UI/MyLink/MyLink';

function Register() {
  return (
    <Auth title="Добро пожаловать!">
      <MyInput required type="text" label="Имя" />
      <MyInput required type="text" label="E-mail" />
      <MyInput required type="password" label="Пароль" />
      <div className="auth__controls">
        <MyButton type="submit" cn="auth__button">
          Зарегистрироваться
        </MyButton>
        <p className="auth__text">
          Уже зарегистрированы?
          <MyLink cn="auth__link" link="/signin">
            Войти
          </MyLink>
        </p>
      </div>
    </Auth>
  );
}

export default Register;
