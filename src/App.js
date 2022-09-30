import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTab = [...tasks];
    newTab.push({ title: input, isDone: false });
    setTasks(newTab);
    setInput("");
  };

  const handleCheck = (index) => {
    const newTab = [...tasks];
    newTab[index].isDone = !newTab[index].isDone;
    setTasks(newTab);
  };

  const handleDelete = (index) => {
    const newTab = [...tasks];
    newTab.splice(index, 1);
    setTasks(newTab);
  };

  return (
    <div className="App">
      {tasks.map((task, index) => {
        return (
          <div className="tasks-row" key={index}>
            <input
              checked={task.isDone}
              type="checkbox"
              onChange={() => {
                handleCheck(index);
              }}
            />
            <span className={task.isDone ? "task-done" : null}>
              {task.title}
            </span>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
      <form className="validate" onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="submit">Add a task</button>
      </form>
    </div>
  );
}

export default App;
