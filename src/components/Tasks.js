/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask }) => {
  return (
        <>
        {tasks.map((task) => (
             <Task key={task.id} deleteTask={deleteTask} task={task}/>
        ))}
        </>
  );
};


Tasks.propTypes = {
    tasks: PropTypes.array,
    deleteTask: PropTypes.func
}
  
export default Tasks;
