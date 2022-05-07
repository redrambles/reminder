/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDelete, toggleReminder }) => {

  const orderByImportance = () => {
    let important = []
    let regular = []
    tasks.map(task => (
      task.reminder ? important.push(task) : regular.push(task)
    ))
    return [...important, ...regular]
  }
	return (
		<>
			{orderByImportance().map((task) => (
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
