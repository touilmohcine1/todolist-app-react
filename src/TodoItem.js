import React from "react";

function TodoItem({ task, onDelete }) {
  return (
    <li style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
      <span style={{ marginRight: "10px" }}>{task}</span>
      <button onClick={onDelete}>Supprimer</button>
    </li>
  );
}

export default TodoItem;
