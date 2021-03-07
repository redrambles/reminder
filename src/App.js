/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App () {
  const [tasks] = useState([
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
    console.log('delete', id)
  }

  return (
    <div className="container">
    <Header title="Task Tracker" />
    <Tasks deleteTask={deleteTask} tasks={tasks}/>
    </div>
  );
}

export default App;
