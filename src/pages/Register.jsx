import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import MyInput from '../components/UI/MyInput/MyInput';
import { registerSchema } from '../validation/validation';
import MainApi from '../api/MainApi';
import { useFetching } from '../hooks';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

function Register() {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const [registerHandler, isLoading, error] = useFetching(async (formData) => {
    await MainApi.register(formData);
    await MainApi.login({ email: formData.email, password: formData.password });
    setIsAuth(true);
    navigate('/movies');
  });

  return (
    <Auth
      title="Добро пожаловать!"
      error={error}
      isLoading={isLoading}
      btnText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkText="Войти"
      link="/signin"
      isValid={isValid}
      onSubmit={handleSubmit(registerHandler)}
    >
      <MyInput
        type="text"
        label="Имя"
        error={errors.name}
        {...register('name')}
      />
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

export default Register;
