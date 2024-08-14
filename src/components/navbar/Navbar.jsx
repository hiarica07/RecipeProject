import React from 'react'
import NavbarS, { NavLinkk } from './style'
// import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavbarS>
      <NavLinkk to="/">Home</NavLinkk>
      <NavLinkk to="/register">Register</NavLinkk>
      <NavLinkk to="/about">About</NavLinkk>
      <NavLinkk to="##">Login</NavLinkk>
    </NavbarS>
  )
}

export default Navbar