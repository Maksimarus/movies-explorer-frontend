import Auth from '../../components/Auth/Auth';
import MyInput from '../../components/UI/MyInput/MyInput';
import MyButton from '../../components/UI/MyButton/MyButton';
import MyLink from '../../components/UI/MyLink/MyLink';

function Login() {
  return (
    <Auth title="Рады видеть!">
      <MyInput required type="text" label="E-mail" />
      <MyInput required type="password" label="Пароль" />
      <div className="auth__controls">
        <MyButton type="submit" cn="auth__button">
          Войти
        </MyButton>
        <p className="auth__text">
          Ещё не зарегистрированы?
          <MyLink cn="auth__link" link="/signup">
            Регистрация
          </MyLink>
        </p>
      </div>
    </Auth>
  );
}

export default Login;
