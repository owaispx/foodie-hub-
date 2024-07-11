import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'


const Navbar = () => {

  return (
    <nav>
    <div className="navbar">
      <div className="logo">
          <h1>FoodieHub</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/Create">Create</a></li>
        <li><a href="/Delete">Delete</a></li>
        <li><a href="/Menu">Menu</a></li>
      </ul>
      <div className="auth-buttons">
      <Link className='lsbtn' to="/Register">Register</Link>
      <Link className='lsbtn' to="/Login"> Login</Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar