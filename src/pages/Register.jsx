import Auth from '../components/Auth/Auth';
import MyInput from '../components/UI/MyInput/MyInput';
import MyButton from '../components/UI/MyButton/MyButton';
import MyLink from '../components/UI/MyLink/MyLink';
import { useForm } from 'react-hook-form';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registerHandler = (formData) => {
    console.log(formData);
  };

  return (
    <Auth title="Добро пожаловать!" onSubmit={handleSubmit(registerHandler)}>
      <MyInput required type="text" label="Имя" {...register('name')} />
      <MyInput required type="text" label="E-mail" />
      <MyInput required type="password" label="Пароль" />
      <div className="auth__controls">
        <MyButton type="submit" className="auth__button">
          Зарегистрироваться
        </MyButton>
        <p className="auth__text">
          Уже зарегистрированы?
          <MyLink className="auth__link" to="/signin">
            Войти
          </MyLink>
        </p>
      </div>
    </Auth>
  );
}

export default Register;
