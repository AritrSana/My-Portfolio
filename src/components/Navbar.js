/** @format */
import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  if (localStorage.getItem("chakra-ui-color-mode")) {
    setColorMode(localStorage.getItem("chakra-ui-color-mode"));
  }

  return (
    <div
      style={{ width: "100%", height: "auto" }}
      className='animate__animated animate__backInUp animate-1s'>
      <nav className={`navbar navbar-expand-lg navbar-${colorMode}`}>
        <div className='container'>
          <Link
            className='navbar-brand'
            to='/'
            style={{ fontWeight: "bold", fontSize: "1.80em" }}>
            Learn JavaScript
          </Link>
          <button
            className={"navbar-toggler"}
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <IconButton
                  icon={colorMode === "light" ? <BsMoon /> : <BsSun />}
                  onClick={toggleColorMode}
                />
              </li>
              <li className='nav-item'>
                <NavLink
                  className={`nav-link ${colorMode}`}
                  aria-current='page'
                  to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={`nav-link ${colorMode}`} to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={`nav-link ${colorMode}`} to='/skills'>
                  Skills
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className={`nav-link ${colorMode}`} to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;