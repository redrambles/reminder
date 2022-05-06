import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Message from "./Message";

const AddTask = ({ addTask }) => {
	const [message, setMessage] = useState("");
	const [showMessage, setShowMessage] = useState(false);
	const [form, setForm] = useState({
		text: "",
		time: "",
		reminder: false,
	});

	const onHandleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({ ...form, [name]: type === "checkbox" ? checked : value });
	};

	const createTask = (e) => {
		const { text, time, reminder } = form;
		setMessage("");
		setShowMessage(false);
		e.preventDefault();
		if (text.length === 0) {
			setMessage("Please enter a task.");
			setShowMessage(true);
		} else {
			addTask(text, time, reminder);
			setForm({
				text: "",
				time: "",
				reminder: false,
			});
		}
	};

	return (
		<form className='add-form' onSubmit={createTask}>
			{showMessage && <Message text={message} color='tomato' duration={2000} setShowMessage={setShowMessage} />}
			<div className='form-control'>
				<label htmlFor='text'>Task</label>
				<input type='text' id='text' name='text' value={form.text} onChange={onHandleChange} placeholder='Add Task' />
			</div>
			<div className='form-control day'>
				<label htmlFor='time'>Day & Time</label>
				<input type='text' id='time' name='time' value={form.time} placeholder='March 12th at 9:30am' onChange={onHandleChange} />
			</div>
			<div className='form-control form-control-check'>
				<label htmlFor='reminder'>Reminder</label>
				<input
					type='checkbox'
					id='reminder'
					name='reminder'
					value={form.reminder}
					checked={form.reminder}
					onChange={onHandleChange}
				/>
			</div>
			<input className='btn btn-block' type='submit' value='Save Task' />
		</form>
	);
};

AddTask.propTypes = {
	addTask: PropTypes.func,
};

export default AddTask;
