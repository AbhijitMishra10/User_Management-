import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBooks } from '../Utils/bookSlice'
import BookForm from '../Components/BookForm'
function AddBook() {
  const navigate = useNavigate()
    const [book, setBook] = useState({
        title: '',
        author: '',
        category: '',
        description: '',
        rating: ''
      })
      const[error, setError] = useState('')
      const dispatch = useDispatch()
      function handleSubmit(e) {
        e.preventDefault()
        const {title, author, category, description, rating} = book 
        if(!title || !author || !category || !description || !rating) {
          setError('Please fill out all the required fields')
          return
        }
        dispatch(addBooks(book))
        navigate('/books')
      }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column', backgroundColor: '#1f1c1cff', color: 'wheat', height: '600px'}}>
      <h2 style={{marginBottom: '1rem'}}>Add a new book</h2>
      <div style={{backgroundColor: '#360a0aff', padding: '1rem', borderRadius:'10px', boxShadow:'0 4px 8px rgba(0,0,0,0.2)', width: '60%', maxWidth: '350px', height: '400px'}}>
      <BookForm book={book} setBook={setBook} handleSubmit={handleSubmit} error={error}/>
      </div>
    </div>
  )
}

export default AddBook