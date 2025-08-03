// Importing the necessary modules for this component
import React from 'react'
import { useRouteError, useLocation } from 'react-router-dom' //hook, used to capture any type of routing error in the routing of the page
function NotFound() {
  // initializing the hook in a variable
  const err = useRouteError() 
  // If there is some sort of error in routing, this will show them
  return (
    <div id='Not-Found'>
      <h2>404: Page Not Found 🚨</h2>
      <p>The path {location.pathname} doesn't exists </p>
      <p>{err.message || err.statusText || 'Oops! Something went wrong.'}</p>  {/* This will showcase the text related to the err*/} 
      <img src="david-pupaza-heNwUmEtZzo-unsplash.jpg" alt="Error.jpg"/>
      </div>
  )
}
// Exporting the component using default export type
export default NotFound