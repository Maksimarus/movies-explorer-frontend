import './SectionTitle.css';
import PropTypes from 'prop-types';

function SectionTitle({ children, cn }) {
  return <h2 className={`section-title ${cn}`}>{children}</h2>;
}

SectionTitle.defaultProps = {
	cn: '',
	children: null,
}

SectionTitle.propTypes = {
	cn: PropTypes.string,
	children: PropTypes.string,
}

export default SectionTitle;
