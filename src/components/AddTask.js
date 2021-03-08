import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const AddTask = ({addTask}) => {

    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onChangeText = (e) => {
        setText(e.target.value);
    };

    const onChangeDayTime = (e) => {
        setDay(e.target.value);
    };

    const checkedValue = (e) => {
        setReminder(e.currentTarget.checked);
    };

    const createTask = (e) => {
        e.preventDefault();
        if (text.length === 0){
            alert("Please enter a task.");
            return;
        }
        addTask(text, day, reminder);
        setText("");
        setDay("");
        setReminder(false);
    };

    return (
        <form className="add-form" onSubmit={createTask}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" value={text} onChange={onChangeText} placeholder="Add Task"/>
            </div>
            <div className="form-control day">
                <label>Day & Time</label>
                <input type="text" value={day} placeholder="Add Day and Time" onChange={onChangeDayTime}/>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={checkedValue} />
            </div>
            <input className="btn btn-block"  type="submit" value="Save Task" />
        </form>
    );
};

AddTask.propTypes = {
    addTask: PropTypes.func,
};

export default AddTask;
