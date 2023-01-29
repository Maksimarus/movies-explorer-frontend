import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Movie.css';
import { countDuration } from '../../utils/countDuration';
import MyButton from '../UI/MyButton/MyButton';
import { number } from 'prop-types';

function Movie({
  nameRU,
  image,
  duration,
  trailerLink,
  likeFilm,
  id,
  deleteFilm,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const onLikeCard = () => {
    likeFilm(id);
    setIsLiked((prev) => !prev);
  };
  const onDeleteCard = () => {
    deleteFilm(id);
  };
  let movieButton;
  if (likeFilm) {
    movieButton = (
      <MyButton
        className={classNames('movie__like', { active: isLiked })}
        onClick={onLikeCard}
        type="button"
      >
        <svg
          className="movie__like-icon"
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.27273 0C6.27273 0 5.54545 0.523077 5 1.08974C4.45455 0.566667 3.72727 0 2.72727 0C1.13636 0 0 1.2641 0 2.83333C0 3.61795 0.318182 4.31538 0.909091 4.79487L5 8.5L9.09091 4.79487C9.63636 4.27179 10 3.61795 10 2.83333C10 1.2641 8.86364 0 7.27273 0Z"
            fill="#fff"
          />
        </svg>
      </MyButton>
    );
  } else if (deleteFilm) {
    movieButton = (
      <MyButton
        className={classNames('movie__like', { active: isLiked })}
        onClick={onLikeCard}
        type="button"
      >
        <svg
          className="movie__like-icon"
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.27273 0C6.27273 0 5.54545 0.523077 5 1.08974C4.45455 0.566667 3.72727 0 2.72727 0C1.13636 0 0 1.2641 0 2.83333C0 3.61795 0.318182 4.31538 0.909091 4.79487L5 8.5L9.09091 4.79487C9.63636 4.27179 10 3.61795 10 2.83333C10 1.2641 8.86364 0 7.27273 0Z"
            fill="#fff"
          />
        </svg>
      </MyButton>
    );
  }

  return (
    <li className="movie">
      <a
        className="movie__link"
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie__image"
          src={`https://api.nomoreparties.co/${image.url}`}
          alt={image.name}
        />
      </a>
      <div className="movie__desc">
        <p className="movie__name">{nameRU}</p>
        {movieButton}
      </div>
      <p className="movie__duration">{countDuration(duration)}</p>
    </li>
  );
}

Movie.propType = {
  id: number,
  nameRU: PropTypes.string,
  image: PropTypes.string,
  duration: PropTypes.number,
  trailerLink: PropTypes.string,
  likeFilm: PropTypes.func,
  deleteFilm: PropTypes.func,
};

Movie.defaultProps = {
  id: 1,
  nameRU: 'Фильм',
  image:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80',
  duration: '00',
  trailerLink: '',
  likeFilm: null,
  deleteFilm: null,
};

export default Movie;
