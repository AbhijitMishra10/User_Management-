// Importing React and Outlet for nested routing
import React from 'react'
import { Outlet } from 'react-router-dom'
// Import Header component for consistent navigation
import Header from './Components/Header'
// App component acts as a layout wrapper
function App() {
  return (
    <div>
        {/* Header is always visible on all the pages*/}
        <Header/>
        {/* Main content area, dynamically filled by child routes via */}
        <main>
        <Outlet/>
        </main>
    </div>
  )
}
// Export the component as default export
export default App