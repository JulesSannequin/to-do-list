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
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => {
                handleCheck(index);
              }}
            />
            <span>{task.title}</span>
            <button
              onClick={(index) => {
                handleDelete(index);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
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
