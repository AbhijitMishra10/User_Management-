import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList({todos, toggleComplete, deleteTodo,editTodo}) {  
    return (
    <div>
        <ul>
            {todos.map(todo => 
              <ToDoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)
              }
        </ul>
    </div>
  )
}

export default ToDoList