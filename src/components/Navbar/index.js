import React from 'react'
import { Link } from 'react-router-dom'
import {  Nav, NavLink, NavIcon} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to='/'>Mantro Caffe & Food</NavLink>
            <NavIcon>
                <Link to='menu'>
                <button>Menu</button> 
                </Link>  
            </NavIcon>
        </Nav>
    </>
  )
}

export default Navbar