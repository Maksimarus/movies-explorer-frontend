import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Burger.css';

function Burger({ onClickBurger, isVisibleMenu }) {
  return (
    <button
      type="button"
      className={classNames('burger', { active: isVisibleMenu })}
      onClick={onClickBurger}
    >
      <span className="burger-line" />
    </button>
  );
}

Burger.propTypes = {
  isVisibleMenu: PropTypes.bool,
  onClickBurger: PropTypes.func,
};

Burger.defaultProps = {
  isVisibleMenu: false,
  onClickBurger: () => {},
};

export default Burger;
