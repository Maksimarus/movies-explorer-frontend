import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__desc">
        <p className="footer__year">© 2023</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://practicum.yandex.ru"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://github.com/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
