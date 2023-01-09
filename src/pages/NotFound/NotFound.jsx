import './NotFound.css';
import MyButton from '../../components/UI/MyButton/MyButton';

function NotFound() {
  return (
    <section className="notFound">
      <div className="notFound__container">
        <h2 className="notFound__title">404</h2>
        <p className="notFound__desc">Страница не найдена</p>
        <MyButton cn="notFound__button">Назад</MyButton>
      </div>
    </section>
  );
}

export default NotFound;
