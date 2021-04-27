import React, {Component} from 'react';
import './Header.css';
import RegisterModal from './Register/Register';
import Logout from './Logout/Logout';
import LoginModal from './Login/Login';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


class Header extends Component {
  state = {
      isOpen: false
  }

  static propTypes = {
      auth: PropTypes.object.isRequired
  }

  toggle = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <>
            <li className="nav-item mt-3">
                <span className="navbar-text me-2">
                    <strong>{ user ? `Welcome ${user.name}` : ''}</strong>
                </span>
            </li>
            <Link to="/cart">
            <button type="button" className="btn btn-lg btn-dark">
                <i class="bi bi-cart3"></i>
            </button>
            </Link>
            <li className="nav-item">
                <Logout/>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className="nav-item">
                <RegisterModal/>
            </li>
            <li className="nav-item">
                <LoginModal/>
            </li>
        </>
    );

    return(
        <div className="header-class">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" expand="sm" >
              <header className="container-fluid py-2">
                  <a className="navbar-brand" href="/">
                    <i className="bi bi-watch">Timeless</i>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                    <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav nav justify-content-center">
                          <li><a href="#about-id" className="nav-link">About</a></li>
                          <li><a href="#feature-id" className="nav-link">Features</a></li>
                          <li><a href="#store-id" className="nav-link">Pricing</a></li>
                          <li><a href="#faq-id" className="nav-link">FAQs</a></li>
                          <li><a href="#review-id" className="nav-link">Reviews</a></li>              
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        { isAuthenticated ? authLinks: guestLinks} 
                        </ul>
                </header>
            </nav>
        </div>
    );
}
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Header);

