/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task key={task.id} toggleReminder={toggleReminder} onDelete={onDelete} task={task} />
			))}
		</>
	);
};

Tasks.propTypes = {
	tasks: PropTypes.array,
	onDelete: PropTypes.func,
	toggleReminder: PropTypes.func,
};

export default Tasks;
