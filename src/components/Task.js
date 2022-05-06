import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, toggleReminder }) => {
    console.log(task)

	return (
		<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
			<h3>
				{task.text} <FaTimes style={faStyle} onClick={() => onDelete(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

const faStyle = {
	color: 'red',
	cursor: 'pointer',
};

Task.propTypes = {
	text: PropTypes.string,
	deleteTask: PropTypes.func,
    toggleReminder: PropTypes.func,
    onDelete: PropTypes.func,
    task: PropTypes.shape({
        reminder: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        day: PropTypes.string,
    }),
};

export default Task;



