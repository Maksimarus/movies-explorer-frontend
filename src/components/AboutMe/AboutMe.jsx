import './AboutMe.css';
import photo from '../../images/my-photo.jpg';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle className="about-me__title">Студент</SectionTitle>
      <div className="about-me__content">
        <div className="about-me__text">
          <p className="about-me__name">Максим</p>
          <p className="about-me__work">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__desc">
            Я родился и живу в Севастополе. Я люблю слушать музыку, а ещё
            увлекаюсь бегом. Недавно начал заниматься веб-разработкой. С 2017
            года работаю аналитиком на государственную организацию. Хочу сменить
            вид деятельности и полностью уйти в разработку.
          </p>
          <a
            href="https://github.com/Maksimarus"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={photo} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
