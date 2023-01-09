import SectionTitle from '../UI/SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about">
      <div className="about__container">
        <SectionTitle cn="about__title">О проекте</SectionTitle>
        <div className="about__desc">
          <div className="desc">
            <p className="desc__title">Дипломный проект включал 5 этапов</p>
            <p className="desc__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="desc">
            <p className="desc__title">На выполнение диплома ушло 5 недель</p>
            <p className="desc__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="weeks">
          <div className="weeks__one">
            <div className="weeks__back">1 неделя</div>
            <p className="weeks__text">Back-end</p>
          </div>
          <div className="weeks__four">
            <div className="weeks__front">4 недели</div>
            <p className="weeks__text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
