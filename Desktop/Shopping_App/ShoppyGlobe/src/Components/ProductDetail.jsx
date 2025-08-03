// Import necessary modules for this component
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //Hook to access route parameter, for dynamic routing
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Utils/cartSlice';
// Product Details component - displays the details for a single product based on ID
function ProductDetail() {
  const { id } = useParams(); //Get the dynamic product ID from the URL
  const [product, setProduct] = useState(null) //State to store fetched product, initial state is null
  const[error, setError] = useState(null) //State to store any fetch errors
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cart.items)
  const currentItem = cartItems.find(item => item.id === Number(id))
  const quantity = currentItem ? currentItem.quantity : 0
  // Fetch product details from the API whenever the 'id' changes
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if(!res.ok) throw new Error("Product not found😞");
          return res.json()
      })
      .then((data) => setProduct(data)) //Save product data to state
      .catch((err) => setError(err.message)) //Catch and store any error message
  },[id])
  // If there's an error, display it
  if (error) return <p>Error: {error}</p>
  // Show a loading message while product data is being fetched
  if(!product) return <p>Loading product...</p>
  // Once data is fetched, render the product details
  return (
    <div>
      <h3>
        {product.title}
      </h3>
      <img src={product.thumbnail} alt={product.title} width='200'/>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <button onClick={() => dispatch(removeFromCart(product.id))} style={{marginLeft: '5px'}} disabled={quantity === 0}>Remove from Cart</button>
      {quantity > 0 && (
        <span style={{ marginLeft: '0.5rem', fontWeight: 'bold', color: '#0074D9'}}>🛒x{quantity}</span>
      )}
    </div>
  )
}
// Export the componet as default
export default ProductDetail