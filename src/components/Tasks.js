/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
        <>
        {tasks.map((task) => (
             <Task key={task.id} onToggle={onToggle} onDelete={onDelete} task={task}/>
        ))}
        </>
  );
};


Tasks.propTypes = {
    tasks: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func
};
  
export default Tasks;
