import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  //   const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 logo" to="/">
            CRUD App
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active fw-normal" : "fw-light"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/products"
                      ? "active fw-normal"
                      : "fw-light"
                  }`}
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about"
                      ? "active fw-normal"
                      : "fw-light"
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact"
                      ? "active fw-normal"
                      : "fw-light"
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Login
              </Link>
              <Link to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-light fa-user-plus me-1"></i> Register
              </Link>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart
                {state.length > 0 ? ` (${state.length})` : null}
              </Link>
            </div>
          </div> */}
          <div className="buttons">
            <Link to="/addUser" className="btn te">
              <i className="fa fa-light fa-user-plus me-1"></i> Add user
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
