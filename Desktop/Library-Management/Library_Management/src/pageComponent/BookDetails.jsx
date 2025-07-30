import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function BookDetails() {
  const { id } = useParams()
  const book = useSelector((state) => state.book.books.find((b) => b.id === id))
  if(!book) {
    return (
        <div style={{ textAlign: 'center', marginTop: '3rem'}}>
            <h2>Book Not Found 😥</h2>
            <Link to='/books'>Back to Browse</Link>
        </div>
    )
  }
    return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', backgroundColor: '#1a1a1a'}}>
        <div style={{width: '90%', backgroundColor: 'teal', padding: '2rem', borderRadius: '10px', maxWidth: '500px', boxShadow: '2px 4px 8px rgba(0,0,0,0.3)', color: 'wheat'}}>
            <h2 style={{ marginBottom: '1rem'}}>{book.title}</h2>
        <p><strong>Author: {book.author}</strong></p>
        <p><strong>Category: {book.category}</strong></p>
        <p><strong>Rating: {book.rating}</strong></p>
        <p><strong>Description: {book.description}</strong></p>
    <br />
    <Link to='/books' style={{display: 'inline-block', marginTop: '1rem', padding:'0.5rem 1rem', backgroundColor: 'tomato', color: 'wheat', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold'}}>Back to Browse</Link>
   </div>            
    </div>
  )
}

export default BookDetails