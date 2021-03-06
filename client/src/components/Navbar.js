import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { UserContext } from "../App";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  //here mern navbar fun.
  const { state, dispatch } = useContext(UserContext);
  const RenderList = () => {
    if (state) {
      return (
        <>
          <li>
            <Link to="/logout" className="nav-links" onClick={closeMobileMenu}>
              Logout
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            ScrollLabs
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <RenderList />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
