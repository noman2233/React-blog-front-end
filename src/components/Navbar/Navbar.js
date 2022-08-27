import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
    <div className="logo">
       <h1><Link to="/">Blogos</Link> </h1>
    </div>
      <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/blogs">Blogs</Link></li>
     <li><Link to="/about">About</Link></li>
     <li><Link to="/contact">Contact</Link></li>
     
      </ul>
        
        </div>
    </div>
  )
}

export default Navbar