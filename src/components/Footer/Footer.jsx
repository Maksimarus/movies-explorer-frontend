import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__desc">
        <p className="footer__year">© 2022</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="https://practicum.yandex.ru" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a href="https://practicum.yandex.ru" className="footer__link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
