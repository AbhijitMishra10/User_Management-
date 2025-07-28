import React from 'react'

function ToDoItem({todo, toggleComplete, deleteTodo, editTodo}) {
  return (
        <li>
          <input type="checkbox" checked={todo.done} onChange={() => toggleComplete(todo.id)}/>
            <span style={{
              textDecoration: todo.done ? 'line-through' : 'none',
              color: todo.done ? 'gray' : 'black'
            }} onClick={() => toggleComplete(todo.id)}>
                {todo.text}
            </span>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Remove</button>
        </li>
  )
}

export default ToDoItem