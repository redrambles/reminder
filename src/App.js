/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App () {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go to Pharmacy",
      day: "March 10th at 10:30am",
      reminder: true
    },
    {
      id: 2,
      text: "Submit invoice",
      day: "March 12th at 9:00am",
      reminder: true
    },
    {
      id: 3,
      text: "Fill out application",
      day: "March 20th at 5:00pm",
      reminder: false
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (
       task.id !== id
     ))
    );
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id){
        return {...task, reminder: !task.reminder};
      }
      return task;
    }));
  };

  const addTask = (text, day, reminder) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000 + 1),
      text: text,
      day: day,
      reminder: reminder
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
    <Header title="Task Tracker" />
    {tasks.length > 0 ? 
      <Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks}/>
    : "No tasks at the moment."}
    <AddTask addTask={addTask}/>
    </div>
  );
}

export default App;
