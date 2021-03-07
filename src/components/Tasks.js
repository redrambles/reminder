const tasks = [
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
];

const Tasks = () => {
  return (
        <>
        {tasks.map((task) => (
             <h3 key={task.id}>{task.text}</h3>
        ))}
        </>
  );
};

export default Tasks;
