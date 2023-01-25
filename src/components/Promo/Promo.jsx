import './Promo.css';
import heroImage from '../../images/hero-image.png';
import MyButton from '../UI/MyButton/MyButton';

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
        <MyButton className="promo__btn">Узнать больше</MyButton>
      </div>
    </section>
  );
}

export default Promo;
