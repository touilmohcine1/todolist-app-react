import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask(""); // Réinitialiser le champ
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Ajouter</button>
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
