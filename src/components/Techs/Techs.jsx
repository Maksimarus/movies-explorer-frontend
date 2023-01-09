import './Techs.css';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <SectionTitle cn="techs__title">Технологии</SectionTitle>
        <div className="techs__content">
          <h3 className="techs__header">7 технологий</h3>
          <p className="techs__desc">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs-list">
            <li className="techs-list__item">HTML</li>
            <li className="techs-list__item">CSS</li>
            <li className="techs-list__item">JS</li>
            <li className="techs-list__item">React</li>
            <li className="techs-list__item">Git</li>
            <li className="techs-list__item">Express.js</li>
            <li className="techs-list__item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
