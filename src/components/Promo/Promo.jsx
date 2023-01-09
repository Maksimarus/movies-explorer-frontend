import './Promo.css';
import heroImage from '../../images/hero-image.png';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info">
          <div className="promo__text">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <p className="promo__desc">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img className="promo__image" src={heroImage} alt="" />
        </div>
        <p className="promo__btn">Узнать больше</p>
      </div>
    </section>
  );
}

export default Promo;
