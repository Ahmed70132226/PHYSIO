import React from 'react';
import { Link } from 'react-router-dom';
import customIcon from './assets/custom-icon.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  shadow-sm px-4">
      <div className="container-fluid">
       
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src={customIcon}
            alt="Physio logo"
            style={{ width: '40px', height: '40px', borderRadius: '8px' }}
          />
          <span className="fw-bold fs-4 ">Physio</span>
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Appointments">Appointments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/PrivacyPolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
