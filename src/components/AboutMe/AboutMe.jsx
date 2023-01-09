import './AboutMe.css';
import photo from '../../images/my-photo.jpg';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe__container">
        <SectionTitle cn="aboutMe__title">Студент</SectionTitle>
        <div className="aboutMe__content">
          <div className="aboutMe__text">
            <p className="aboutMe__name">Виталий</p>
            <p className="aboutMe__work">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutMe__desc">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <p className="aboutMe__link">Github</p>
          </div>
          <img className="aboutMe__photo" src={photo} alt="Фото студента" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
