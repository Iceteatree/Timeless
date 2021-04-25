import React from 'react';
import './Header.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <header className="container-fluid py-3 mb-2">
            <a className="navbar-brand" href="/">
              <i className="bi bi-watch">Timeless</i>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarNavDropdown">
              <ul className="navbar-nav nav justify-content-center">
                <li><a href="/" className="nav-link">About</a></li>
                <li><a href="/" className="nav-link">Features</a></li>
                <li><a href="/" className="nav-link">Pricing</a></li>
                <li><a href="/" className="nav-link">FAQs</a></li>
                <li><a href="/" className="nav-link">Reviews</a></li>
              </ul>
            </div>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login/Register</button>
            </div>
          </header>
        </nav>
    )
}

export default Header
