/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Task = ({task, deleteTask}) => {

    const removeTask = () => {
        deleteTask(task.id);
    }

    return (
        <div className="task">
            <h3>{task.text} <FaTimes style={faStyle} onClick={removeTask}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

const faStyle = {
    color: "red",
    cursor: "pointer"
}

Task.propTypes = {
   text: PropTypes.string,
   deleteTask: PropTypes.func
};


export default Task
