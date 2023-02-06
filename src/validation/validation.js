import * as yup from 'yup';

export const errorMessages = {
  409: 'Пользователь с таким email уже существует',
  401: 'Неправильные почта или пароль',
};

export const registerSchema = yup.object({
  name: yup.string().min(2).max(30).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const userSchema = yup.object({
  name: yup.string().min(2).max(30),
  email: yup.string().email(),
});
