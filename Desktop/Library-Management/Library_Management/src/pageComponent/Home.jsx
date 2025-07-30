import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
function Home() {
  const books = useSelector((state) => state.book.books)
  const categories = [...new Set(books.map(book => book.category))]

  const popularBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0,3)
  return (
    <div style={{padding: '2rem'}}>
      <h1>Welcome to this online Library</h1>
      <p>Explore some of the good old collection and create your own collection</p>
      <h2>Categories 📃</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap:'1rem'}}>
        {categories.map((c,index) => {
          return <span key={index} style={{
            padding: '0.5rem 1rem',
            border: '1px solid black',
            borderRadius: '5px',
            backgroundColor: 'tomato',
            fontWeight: 'bold'
          }}>
            {c}
          </span>
        })}
      </div>
      <h2 style={{marginTop: '2rem'}}>Popular Books</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap:'1rem'}}>
        {popularBooks.map((book) => (
          <div key={book.id} style={{
            border: '1px solid black',
            padding: '1rem',
            width: '250px'
          }}>
            <h3>{book.title}</h3>
            <p><strong>Author: {book.author}</strong></p>
            <p><strong>Rating: {book.rating}</strong></p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home