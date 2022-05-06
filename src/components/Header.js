/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title = 'This is the header component', onClick, showAddTask }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button onClick={onClick} color={showAddTask ? '#222' : '#25915a'} text={showAddTask ? 'Close' : 'Add'} />
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	showAddTask: PropTypes.bool,
};

export default Header;
