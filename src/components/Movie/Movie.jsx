import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Movie.css';
import MyButton from '../UI/MyButton/MyButton';
import { countDuration } from '../../utils';
import { useLocation } from 'react-router-dom';

function Movie({ movie, likeButtonHandler, deleteFilm }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(!!movie._id);
  const onLikeCard = () => {
    likeButtonHandler(movie);
    setIsLiked((prev) => !prev);
  };
  const onDeleteCard = () => {
    deleteFilm(movie._id);
  };
  let movieButton;
  if (location.pathname === '/movies') {
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
  } else if (location.pathname === '/saved-movies') {
    movieButton = (
      <MyButton className="movie__like" onClick={onDeleteCard} type="button">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.00098 5.06055L6.65254 7.71211L7.7132 6.65145L5.06164 3.99989L7.71308 1.34844L6.65242 0.287781L4.00098 2.93923L1.34923 0.287484L0.288574 1.34814L2.94032 3.99989L0.288461 6.65174L1.34912 7.7124L4.00098 5.06055Z"
            fill="white"
          />
        </svg>
      </MyButton>
    );
  }

  return (
    <li className="movie">
      <a
        className="movie__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie__image"
          src={movie.image}
          alt={movie.image.name}
        />
      </a>
      <div className="movie__desc">
        <p className="movie__name">{movie.nameRU}</p>
        {movieButton}
      </div>
      <p className="movie__duration">{countDuration(movie.duration)}</p>
    </li>
  );
}

Movie.propTypes = {
  movie: {
    _id: PropTypes.string,
    country: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    year: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    trailerLink: PropTypes.string,
    thumbnail: PropTypes.string,
    movieId: PropTypes.number,
    nameRU: PropTypes.string,
    nameEN: PropTypes.string,
  },
  likeButtonHandler: PropTypes.func,
  deleteFilm: PropTypes.func,
};

Movie.defaultProps = {
  movie: {
    _id: '',
    nameRU: 'Фильм',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80',
    duration: '00',
    trailerLink: '',
    country: '',
    director: '',
    year: 1000,
    description: '',
    thumbnail: '',
    movieId: 0,
    nameEN: 'FIlm',
  },
  likeButtonHandler: null,
  deleteFilm: null,
};

export default Movie;
