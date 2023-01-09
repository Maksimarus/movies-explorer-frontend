import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MyLink.css';

function MyLink({ children, cn, link }) {
  return (
    <Link to={link} className={`my-link ${cn}`}>
      {children}
    </Link>
  );
}

MyLink.defaultProps = {
  cn: '',
  link: '',
  children: null,
};

MyLink.propTypes = {
  cn: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default MyLink;
