import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import MainApi from '../api/MainApi';
import Auth from '../components/Auth/Auth';
import MyInput from '../components/UI/MyInput/MyInput';
import { useFetching } from '../hooks';
import { loginSchema } from '../validation/validation';
import AuthContext from '../contexts/AuthContext';

function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const [loginHandler, isLoading, error] = useFetching(async (formData) => {
    await MainApi.login(formData);
    setIsAuth(true);
    navigate('/movies');
  });

  return (
    <Auth
      title="Рады видеть!"
      error={error}
      isLoading={isLoading}
      btnText="Войти"
      text="Ещё не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
      isValid={isValid}
      onSubmit={handleSubmit(loginHandler)}
    >
      <MyInput
        type="text"
        label="E-mail"
        error={errors.email}
        {...register('email')}
      />
      <MyInput
        type="password"
        label="Пароль"
        error={errors.password}
        {...register('password')}
      />
    </Auth>
  );
}

export default Login;
