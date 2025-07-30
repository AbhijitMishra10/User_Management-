import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav style={{display: 'flex', width: '100vw', justifyContent: 'center', gap:'2rem', padding: '1rem', backgroundColor: 'darkred', borderBottom: '1px solid black', marginBottom: '1rem', position: 'sticky', top: 0, zIndex: 1}}>
      <Link to='/' style={{color: 'wheat'}}>Home</Link>
      <Link to='/books' style={{color: 'wheat'}}>BrowseBook</Link>
      <Link to='/add-book' style={{color: 'wheat'}}>Add Book</Link>
    </nav>
  )
}

export default Navbar