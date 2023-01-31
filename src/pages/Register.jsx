import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Auth from '../components/Auth/Auth';
import MyInput from '../components/UI/MyInput/MyInput';
import MyButton from '../components/UI/MyButton/MyButton';
import MyLink from '../components/UI/MyLink/MyLink';
import { registerSchema } from '../validation/validation';
import MainApi from '../api/MainApi';
import { useFetching } from '../hooks';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const [registerHandler, isLoading, error] = useFetching(async (formData) => {
    await MainApi.register(formData);
  });

  return (
    <Auth
      title="Добро пожаловать!"
      error={error}
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
      <div className="auth__controls">
        <MyButton type="submit" className="auth__button" disabled={isLoading}>
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
