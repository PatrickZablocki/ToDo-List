import React from 'react';

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
  return (
    <li>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {todo.text}
        </span>
        <button onClick={() => toggleComplete(index)}>Erledigt</button>
        <button onClick={() => deleteTodo(index)}>Löschen</button>
    </li>
  )
}

export default TodoItem;
