/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Task = ({task, onDelete, onToggle}) => {

    const ToggleReminder = () => {
        onToggle(task.id);
    };
    const removeTask = () => {
        onDelete(task.id);
    };

    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={ToggleReminder}>
            <h3>{task.text} <FaTimes style={faStyle} onClick={removeTask}/></h3>
            <p>{task.day}</p>
        </div>
    );
};

const faStyle = {
    color: "red",
    cursor: "pointer"
};

Task.propTypes = {
   text: PropTypes.string,
   deleteTask: PropTypes.func
};


export default Task;
