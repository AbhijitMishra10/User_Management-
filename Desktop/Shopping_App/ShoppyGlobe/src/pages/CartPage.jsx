// Import necessary modules
import React from 'react'
import Cart from '../Components/Cart' //Import the main Cart component
// CartPage Component - wraps the Cart component for routing
function CartPage() {
  return (
    <Cart/> // Render the Cart component when this route is accessed
  )
}
// Export the component by default export type
export default CartPage