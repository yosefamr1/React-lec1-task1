import React from 'react'
import './Nav.css';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <NavLink to="/productlist" className={({ isActive }) => (isActive ? "active" : "")}>
        Products
      </NavLink>      <div className="buttons">
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
          Cart
        </NavLink>

      </div>
    </div>

  )
}

export default Nav