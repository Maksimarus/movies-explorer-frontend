import classNames from 'classnames';
import { useState } from 'react';
import movieImage from '../../images/movie-image.jpg';
import './Movie.css';

function Movie() {
  const [isLiked, setIsLiked] = useState(false);
  const onLikeCard = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <li className="movie">
      <img className="movie__image" src={movieImage} alt="Логотип фильма" />
      <div className="movie__desc">
        <p className="movie__name">33 слова о дизайне</p>
        <button
          type="button"
          className={classNames('movie__like', { active: isLiked })}
          onClick={onLikeCard}
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
        </button>
      </div>
      <p className="movie__duration">1ч42м</p>
    </li>
  );
}

export default Movie;
