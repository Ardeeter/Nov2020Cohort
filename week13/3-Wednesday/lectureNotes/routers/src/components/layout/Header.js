import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      
      <Link to="/">Home Page</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contactUs">Contact Us</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/comment">Comment</Link>
    </>
  )
}

export default Header
