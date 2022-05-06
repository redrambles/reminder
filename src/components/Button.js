/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

const Button = ({ text = 'Add', color = '#333', onClick }) => {
	return (
		<button onClick={onClick} className='btn' style={{ backgroundColor: color }}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
