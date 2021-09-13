import React, { useState, useEffect, useContext } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../../App";

const Navbar1 = () => {
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
  console.log(`the navbar user ${state} and ${dispatch}`);

  const RenderList = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
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
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/list" className="nav-links" onClick={closeMobileMenu}>
              Influencers
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/signup"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Register
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
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <RenderList />
          </ul>
          {button && <Button buttonStyle="btn--outline">Register</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
