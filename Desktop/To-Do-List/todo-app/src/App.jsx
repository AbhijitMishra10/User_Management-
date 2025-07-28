import { useRef, useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import "./App.css"
function App() {
  const inputRef = useRef()
  const editRef = useRef()
  const[todos, setTodos] = useState([])
  const[editId, setEditId] = useState(null)

  const addTodo = () => {
    const text = inputRef.current.value.trim()
    if(!text) {
      return
    }
    setTodos([...todos, {id: Date.now(), text, done: false}])
    inputRef.current.value = ''
  }
  const toggle = id => setTodos(todos.map(t => t.id === id ? {...t, done: !t.done} : t))
  const remove = id => setTodos(todos.filter(t => t.id !== id))

  const edit = id => {
    setEditId(id)
    const current = todos.find(t => t.id === id)
    if(editRef.current) editRef.current.value = current.text
  }
  const save = () => {
    const updatedText = editRef.current.value.trim()
    setTodos(todos.map(t => t.id === editId ? {...t, text: updatedText} : t))
    setEditId(null)
    editRef.current.value = ''
  }  
  return(
    <div className="container">
      <Header/>
      <input  className="todo" ref={inputRef} placeholder="Add a todo"/>
      <button className="Add-btn" onClick={addTodo}>Add</button>
      {editId && (
        <>
          <input className="edit-input" ref={editRef} />
          <button id="Save" onClick={save}>Save</button>
          <button id="Remove" onClick={() => setEditId(null)}>Remove</button>
        </>
      )}
      <ToDoList todos={todos} toggleComplete={toggle} deleteTodo={remove} editTodo={edit}/>
    </div>
  )
}

export default App