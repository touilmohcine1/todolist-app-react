import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
