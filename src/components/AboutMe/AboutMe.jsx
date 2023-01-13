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
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/Maksimarus" className="about-me__link">
            Github
          </a>
        </div>
        <img className="about-me__photo" src={photo} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
