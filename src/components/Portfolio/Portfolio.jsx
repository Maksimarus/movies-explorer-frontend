import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__item">
          <p className="portfolio__text">Статичный сайт</p>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.60653 16.5241L0.944603 14.8622L13.3026 2.48295H3.7571L3.77841 0.181818H17.2656V13.6903H14.9432L14.9645 4.14489L2.60653 16.5241Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="portfolio__item">
          <p className="portfolio__text">Адаптивный сайт</p>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.60653 16.5241L0.944603 14.8622L13.3026 2.48295H3.7571L3.77841 0.181818H17.2656V13.6903H14.9432L14.9645 4.14489L2.60653 16.5241Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="portfolio__item">
          <p className="portfolio__text">Одностраничное приложение</p>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.60653 16.5241L0.944603 14.8622L13.3026 2.48295H3.7571L3.77841 0.181818H17.2656V13.6903H14.9432L14.9645 4.14489L2.60653 16.5241Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
