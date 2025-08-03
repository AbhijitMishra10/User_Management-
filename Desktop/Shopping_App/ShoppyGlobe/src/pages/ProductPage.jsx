// Import necessary modules
import React from 'react'
import ProductDetail from '../Components/ProductDetail' // Component to display detailed product info
// ProductPage component -  responsible for rendering product detail view
function ProductPage() {
  return (
    <ProductDetail/> // Displays details of a specific product based on route param (:id)
  )
}
// Export the component
export default ProductPage