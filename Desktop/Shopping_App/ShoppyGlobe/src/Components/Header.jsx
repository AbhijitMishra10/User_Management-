// Import necessary modules for this component
import React from 'react'
import { Link } from 'react-router-dom' //Used to navigate between routes without page reloading
// Header Component- contains site title and navigation links
function Header() {
  return (
    <header>
      <h2>ShoppyGlobe🛍️</h2>
      {/* Three routing links to showcase the Home page of the browser
      the Cart page and the Checkout page */}
      <nav>
        <Link to='/home'>Home</Link> {' | '}
        <Link to='/home/cart'>Cart</Link> {' | '}
        <Link to='/home/checkout'>CheckOut</Link>
      </nav>
    </header>
  )
}
// exporting the component through default export type
export default Header