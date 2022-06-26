import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm p-0">
      <div className="container-fluid">
        <Link className="navbar-brand text-capitalize" to="/">
          React Project
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link fs-6 me-3" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link fs-6 me-3" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
