import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Message({ text, color='tomato', duration = 3000, setShowMessage }) {

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowMessage(false);
		}, duration);
		return () => clearTimeout(timeout);
	}, [setShowMessage, duration]);

	const messageColor = {
		color: color,
	};

	return (
		<div className="error" style={messageColor}>
			{text}
		</div>
	);
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  duration: PropTypes.number,
  setShowMessage: PropTypes.bool,
};

export default Message;
