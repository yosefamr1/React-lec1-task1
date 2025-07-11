import React from "react";
import "./Nav.css";
import { NavLink, useNavigate  } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();
   const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const handleSignOut = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };
  return (
     <div className="nav">
      <NavLink
        to="/productlist"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Products
      </NavLink>

      <div className="buttons">
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cart
        </NavLink>

        {!loggedUser ? (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Register
            </NavLink>
          </>
        ) : (
          <>
            <span className="username">Welcome, {loggedUser.username}</span>
            <button onClick={handleSignOut} className="signout-btn">
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
