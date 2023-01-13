import SectionTitle from '../UI/SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about">
      <SectionTitle className="about__title">О проекте</SectionTitle>
      <div className="about__description">
        <div className="project-desc">
          <p className="project-desc__title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="project-desc__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project-desc">
          <p className="project-desc__title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="project-desc__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="table">
        <div className="table__item table__item_count_one">
          <div className="table__week table__week_items_one">1 неделя</div>
          <p className="table__text">Back-end</p>
        </div>
        <div className="table__item table__item_count_four">
          <div className="table__week table__week_items_four">4 недели</div>
          <p className="table__text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
