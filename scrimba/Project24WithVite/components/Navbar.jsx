import React from "react"
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-logo" src="../public/react-small-image.png" />
      <h3 className="nav-text-logo">ReactFacts</h3>
      <h4 className="nav-text">React course - Project 1</h4>
    </nav>
  )
}

export default Navbar
