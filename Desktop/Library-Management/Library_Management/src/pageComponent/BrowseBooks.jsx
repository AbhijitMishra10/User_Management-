import { useState } from "react";
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import BookCard from "../Components/BookCard";

function BrowseBooks() {
  const allBooks = useSelector((state) => state.book.books)
  const [search, setSearch] = useState('')

  const filteredBooks = allBooks.filter((book) => {
    const selectSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
    return selectSearch
  })
    return (
    <div style={{padding: '2rem'}}>
        <h2>Browse All Books📚</h2>
        <input type="text" placeholder="Search by title or author!!!" value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{padding: '0.7rem', marginBottom: '1rem', width: '300px'}}/>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
            {filteredBooks.map((book) => {
                return <BookCard key={book.id} book={book}/>
            })}
        </div>
        {filteredBooks.length === 0 && <p>No Books Found.😞</p>}
    </div>
  )
}

export default BrowseBooks