import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

const Button = ({ type, title, checkStatus }) => {
  const dispatch = useDispatch();

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={() => dispatch(checkStatus())}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checkStatus: PropTypes.func,
};

Button.defaultProps = {
  checkStatus: () => ({ type: 'CHECK_STATUS' }),
};

export default Button;
