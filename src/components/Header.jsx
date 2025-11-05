import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/contact">Contact</Link><br />
        <Link to="/services">Services</Link><br />
        <Link to="/blog">Blog</Link><br />
    </nav>
  )
}

export default Header