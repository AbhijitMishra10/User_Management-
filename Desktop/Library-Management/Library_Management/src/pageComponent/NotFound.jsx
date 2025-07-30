import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'
function NotFound() {
  const error = useRouteError()
  return (
    <div>
      <h1 style={{fontSize: '2rem'}}>
        {error.status || 404}😯
      </h1>
      <p style={{fontSize: '1.2rem'}}>
         {error.statusText || 'Page Not Found'}😑  
      </p>
      <Link to='/' style={{marginTop: '1rem', display: 'inline-block'}}>Back to Home⬅️</Link>
    </div>
  )
}

export default NotFound