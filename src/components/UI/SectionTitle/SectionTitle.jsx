import './SectionTitle.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function SectionTitle({ children, className }) {
  const classes = classNames('section-title', className);

  return <h2 className={classes}>{children}</h2>;
}

SectionTitle.defaultProps = {
  className: '',
  children: null,
};

SectionTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default SectionTitle;
