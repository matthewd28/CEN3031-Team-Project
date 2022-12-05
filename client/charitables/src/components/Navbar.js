import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHandsHelping } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Navigation bar for navigating between pages
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let navigate = useNavigate();

  //Removes access token from user's session when logging out
  const logout = () => {
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    navigate("/");
    window.location.reload(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaHandsHelping className="navbar-icon" />
              ChariTables
            </Link>
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
                  <li className="nav-item">
                    <NavLink
                      to="/find"
                      className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                      }
                      onClick={closeMobileMenu}
                    >
                      Find Opportunities
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/volunteer"
                      className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                      }
                      onClick={closeMobileMenu}
                    >
                      Volunteer
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/donate"
                      className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                      }
                      onClick={closeMobileMenu}
                    >
                      Donate
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </NavLink>
              </li>
              {!localStorage.getItem("accessToken") ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                      }
                      onClick={closeMobileMenu}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                      }
                      onClick={closeMobileMenu}
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <button className="logout" onClick={logout}>
                  Log Out
                </button>
              )}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
