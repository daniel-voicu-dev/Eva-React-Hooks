import React from 'react'

import "../sass/header.sass"

const Header = () => {
  return (
    <header className="header grid g-3-1-2"> 
      <div className="logo g-1"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Logo" /></div>
      <div className="nav--wrapper g-2">
        <div className="search"><input type="text" /> <button type="button">Search</button></div>
        <nav className="nav--header">        
          <a href="/"><i className="ion-md-person"></i></a>
          <a href="/"><i className="ion-md-heart"></i></a>
          <a href="/"><i className="ion-md-cart"></i></a>        
        </nav>
      </div>      
      <nav className="nav--secondary g-3">       
        <a href="/">US</a>
        <a href="/">Europe</a>
        <a href="/">Asia</a>       
      </nav>
    </header>
  )
}

export default Header
