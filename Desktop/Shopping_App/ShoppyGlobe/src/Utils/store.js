// Import necessary modules from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice' //Import the cart reducer from cartSlice
//Configure the Redux store
const store = configureStore({
    // Define the reducer(s) to manage different slices of state
    reducer: {
        cart: cartReducer    // 'Cart' key in the global store handled by cartSlice
    }
})
// Export the configured store to be used in the app
export default store