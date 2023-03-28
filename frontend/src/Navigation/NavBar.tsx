import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-bar-bg">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand nav-text-color" to="/">
          The Joel Hilton Movie Collection
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link nav-text-color" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text-color" to="/Podcasts">
                Podcasts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text-color" to="/Movies">
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
