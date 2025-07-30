import React from 'react'
import {Link} from 'react-router-dom'
function BookCard({book}) {
  return (
    <div style={{ border: '1px solid teal', padding: '1rem', width: '200px'}}>
        <h3>{book.title}</h3>
        <p><strong>Author: {book.author}</strong></p>
        <p><strong>Rating: {book.rating}</strong></p>
        <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  )
}

export default BookCard