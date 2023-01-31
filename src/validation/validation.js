import * as yup from 'yup';

export const regExpForLink =
  /(http|https):\/\/(www)?[a-zA-Z0-9-\.]+\.[a-zA-Z]{2,6}?[a-zA-Z0-9\-\.\_\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=]*#?/;

export const registerSchema = yup.object({
  name: yup.string().min(2).max(30).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
