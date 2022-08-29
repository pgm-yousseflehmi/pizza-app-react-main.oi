import React from 'react'

import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer-container'>
      
      <div className='footer-copyright'>
        Lekker Pizza @ {new Date().getFullYear()}
      </div>
      <div className='footer-link'>
         developed by <a href="https://www.pizzahut.be/nl">pizzahut</a>
      </div>
    </footer>
  )
}

export default Footer