import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHandsHelping } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../routes/Login"
import SignUp from "../routes/SignUp"
import Contact from "../routes/Contact"

function Navbar() {
  const [click, setClick] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const toggleLoginModal = () => {
    setClick(false)
    setLoginModal(!loginModal)
  }

  const toggleSignUpModal = () => {
    setClick(false)
    setSignUpModal(!signUpModal)
  }

  const toggleContactModal = () => {
    setClick(false)
    setContactModal(!contactModal)
  }

  if(loginModal || signUpModal) {
    document.body.classList.add('activeModal');
  } else {
    document.body.classList.remove('activeModal')
  }

  let navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    setClick(false);
    navigate("/");
    return false;
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="navbar-group">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <FaHandsHelping className="navbar-icon" />
                ChariTables
              </Link>
            </div>
            <div className="navbar-group">
              <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Home
                  </NavLink>
                </li>

              {localStorage.getItem("accessToken") && (
                <>
                    <li className="nav-item">
                      <NavLink
                        to="/contributions"
                        className={({ isActive }) =>
                          "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                      >
                      Contributions
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink
                        to="/find"
                        className={({ isActive }) =>
                          "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                      >
                        Find Opportunities
                      </NavLink>
                    </li> */}
                    <li className="nav-item">
                      <NavLink
                        to="/hours"
                        className={({ isActive }) =>
                          "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                      >
                        Hours
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/donations"
                        className={({ isActive }) =>
                          "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                      >
                        Donations
                      </NavLink>
                    </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-links"
                    onClick={toggleContactModal}
                  >
                    Contact Us
                  </NavLink>
                </li>
                </>
              )}
                {!localStorage.getItem("accessToken") ? (
                  <>
                    <li className="nav-item">
                      <NavLink
                      to=""
                        className="nav-links"
                        onClick={toggleLoginModal}
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to=""
                        className="nav-links"
                        onClick={toggleSignUpModal}
                      >
                        Sign Up
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <button className="logout navbar nav-item nav-links" onClick={logout}>
                    Log Out
                  </button>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
      {loginModal && (
        <div className="overlay">
          <div className="modal1 loginContainer">
            <button className="closeModal" onClick={toggleLoginModal}>X</button>
            <Login/>
          </div>
        </div>
      )}
      {signUpModal && (
        <div className="overlay">
          <div className="modal1 loginContainer">
            <button className="closeModal" onClick={toggleSignUpModal}>X</button>
            <SignUp/>
          </div>
        </div>
      )}
      {contactModal && (
        <div className="overlay">
          <div className="modal2 loginContainer">
            <button className="closeModal" onClick={toggleContactModal}>X</button>
            <Contact/>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
