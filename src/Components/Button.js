import { PropTypes } from 'prop-types';

const Button = ({ type, title }) => (
  <button type={type === 'submit' ? 'submit' : 'button'}>{title}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
