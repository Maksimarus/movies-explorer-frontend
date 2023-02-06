import { useContext } from 'react';
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
import { messages } from '../../utils';
import { userSchema } from '../../validation/validation';

function Profile() {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });
  const [updateUser, isLoading, error] = useFetching(async (formData) => {
    const userInfo = await MainApi.updateUserInfo(formData);
    setCurrentUser(userInfo);
  });

  const logout = async () => {
    await MainApi.logout();
    setIsAuth(false);
    localStorage.clear();
    navigate('/');
  };

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
              defaultValue={currentUser?.name}
              {...register('name')}
            />
          </label>
          <label htmlFor="name" className="profile-form__item">
            <span className="profile-form__text">E-mail</span>
            <input
              id="name"
              type="text"
              className="profile-form__input"
              defaultValue={currentUser?.email}
              {...register('email')}
            />
          </label>
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
          {error && (
            <h2 className="auth__error">{messages.defaultErrorMessage}</h2>
          )}
          <div className="profile-form__buttons">
            <MyButton
              type="submit"
              className="profile-form__button"
              disabled={isLoading}
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
