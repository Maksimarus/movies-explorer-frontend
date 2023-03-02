import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import './Profile.css';
import MyButton from '../../components/UI/MyButton/MyButton';
import Header from '../../components/Header/Header';
import AuthContext from '../../contexts/AuthContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import MainApi from '../../api/MainApi';
import { useFetching } from '../../hooks';
import { errorMessages, userSchema } from '../../validation/validation';
import { MyLocalStorage } from '../../utils';

function Profile() {
  const [successMessageState, setSuccessMessageState] = useState(false);
  const [isIdenticalValues, setIsIdenticalValues] = useState(true);
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  const { setCurrentUser } = useContext(CurrentUserContext);
  const currentUser = MyLocalStorage.getItem('user');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { name: currentUser?.name, email: currentUser?.email },
    resolver: yupResolver(userSchema),
  });
  const [updateUser, isLoading, error] = useFetching(async (formData) => {
    setIsIdenticalValues(true);
    const userInfo = await MainApi.updateUserInfo(formData);
    MyLocalStorage.setItem('user', userInfo);
    setCurrentUser(userInfo);
    setSuccessMessageState(true);
  });

  const logout = async () => {
    await MainApi.logout();
    setIsAuth(false);
    localStorage.clear();
    navigate('/');
  };
  useEffect(() => {
    if (successMessageState) {
      setTimeout(() => {
        setSuccessMessageState(false);
      }, 2000);
    }
  }, [successMessageState]);
  useEffect(() => {
    const subscription = watch((values) => {
      setIsIdenticalValues(
        values.name === currentUser.name && values.email === currentUser.email
      );
    });
    return () => subscription.unsubscribe();
  }, [watch, currentUser]);

  const errorMessage = errorMessages[error?.toString()]
    ? errorMessages[error.toString()]
    : errorMessages.defaultErrorMessage;

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile-form" onSubmit={handleSubmit(updateUser)}>
          <label htmlFor="name" className="profile-form__item">
            <span className="profile-form__text">Имя</span>
            <input
              id="name"
              type="text"
              className="profile-form__input"
              {...register('name')}
            />
          </label>
          <label htmlFor="name" className="profile-form__item">
            <span className="profile-form__text">E-mail</span>
            <input
              id="name"
              type="text"
              className="profile-form__input"
              {...register('email')}
            />
          </label>
          {successMessageState && (
            <h2 className="profile__success-message">
              Данные успешно изменены.
            </h2>
          )}
          <span
            className={classNames('my-input__error', 'profile__error', {
              active: errors.name,
            })}
          >
            {errors.name && errors.name.message}
          </span>
          <span
            className={classNames('my-input__error', 'profile__error', {
              active: errors.email,
            })}
          >
            {errors.email && errors.email.message}
          </span>
          {error && <h2 className="auth__error">{errorMessage}</h2>}
          <div className="profile-form__buttons">
            <MyButton
              type="submit"
              className="profile-form__button"
              disabled={isIdenticalValues || !isValid || isLoading}
            >
              {isLoading ? 'Редактирование...' : 'Редактировать'}
            </MyButton>
            <MyButton
              type="button"
              className="profile-form__button profile-form__button_color_red"
              onClick={logout}
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
