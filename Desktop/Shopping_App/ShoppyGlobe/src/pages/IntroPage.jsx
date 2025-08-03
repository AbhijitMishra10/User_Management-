import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function IntroPage() {
  return (
    <div id='Intro-page'>
        <h1>Welcome to <span>ShoppyGlobe🛍️</span></h1>
        <p>It just takes one tap to get what you want.</p>
        <Link id='Home-link' to='/home'>Get Started 😉</Link>
    </div>
  )
}

export default IntroPage