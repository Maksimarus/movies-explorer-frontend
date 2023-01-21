import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MyLink.css';

function MyLink({ children, className, to }) {
  const classes = classNames('my-link', className);

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

MyLink.defaultProps = {
  className: '',
  to: '',
  children: null,
};

MyLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};

export default MyLink;
