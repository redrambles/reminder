import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);

	const [tasks, setTasks] = useState(
		JSON.parse(window.localStorage.getItem('tasks')) || [
			{
				id: 1,
				text: 'Go to Pharmacy',
				day: 'March 10th at 10:30am',
				reminder: true,
			},
			{
				id: 2,
				text: 'Submit invoice',
				day: 'March 12th at 9:00am',
				reminder: true,
			},
			{
				id: 3,
				text: 'Fill out application',
				day: 'March 20th at 5:00pm',
				reminder: false,
			},
		]
	);

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					return { ...task, reminder: !task.reminder };
				}
				return task;
			})
		);
	};

	const addTask = (text, day, reminder) => {
		const newTask = {
			id: Date.now(),
			text,
			day,
			reminder,
		};
		setTasks([...tasks, newTask]);
	};

	const onAddTask = () => {
		setShowAddTask((prevStatus) => !prevStatus);
	};

	return (
		<div className='container'>
			<Header title='Task Tracker' onClick={onAddTask} showAddTask={showAddTask} />
			{showAddTask && <AddTask addTask={addTask} />}
			{tasks.length > 0 ? <Tasks onDelete={deleteTask} toggleReminder={toggleReminder} tasks={tasks} /> : 'No tasks at the moment.'}
		</div>
	);
}

export default App;
