// Import React module
import React, {Component} from 'react';
// import our local styling
import './Header.css';
// Importing these 3 components so we can use them in our Navbar
import RegisterModal from './Register/Register';
import Logout from './Logout/Logout';
import LoginModal from './Login/Login';
// connect our react to redux store with connect
import { connect } from 'react-redux';
// Import Prop types so we can define the types
import PropTypes from 'prop-types';
// Import Link so we can route our frontend.
import { Link } from 'react-router-dom'


// Create a component holds our Navbar items and setting the initial state.
class Header extends Component {
  state = {
      isOpen: false,
      admin: false,
  }
// Setting our type for auth.
  static propTypes = {
      auth: PropTypes.object
  }
// toggle method just changes the state of isOpen to the opposite of isOpen essentially 'toggling' the state.
  toggle = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }
  //   This method is attached to an onClick event that sets the state of admin to true if the user role is admin. Which then triggers a custom route.
  
  adminAccess = () => {
    const { user } = this.props.auth;
    console.log(user)
    // Used to be user.role which had admin assigned to it but it would only work during a refresh. SO below is a temp solution but it works.
    if (user.name === "Admin") {
        this.setState({admin : true})
        console.log(this.state.admin)
        this.forceUpdate()
    } 
  }
//   Render our component. We set our isAuthenticated and ser from our auth actions via props. 
  render() {
    const { isAuthenticated, user } = this.props.auth;
    // This is basically what we want to display when a person has logged in.
    const authLinks = (
        <>
            <li className="nav-item mt-3">
                <span className="navbar-text me-2"> 
                    {this.state.admin ? <div onClick={this.adminAccess}><strong><Link to="/admin">{ user ? `Welcome ${user.name}` : ''}</Link></strong></div> 
                    : <div onClick={this.adminAccess}><strong><Link to="/orders">{ user ? `Welcome ${user.name}` : ''}</Link></strong></div>}
                </span>
            </li>
            <Link to="/cart">
            <button type="button" className="btn btn-lg btn-dark">
                <i className="bi bi-cart3"></i> 
            </button>
            </Link>
            <li className="nav-item">
                <Logout/>
            </li>
        </>
    );
// This is what we want to display when there are no people logged in or authenticated.
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
// Building our Navbar
    return(
        <div className="header-class">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" expand="sm" >
              <header className="container-fluid py-2">
                  <a className="navbar-brand" href="/">
                    <i className="bi bi-watch">Timeless</i>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                    <div className="collapse navbar-collapse align-items-center justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav nav justify-content-center">
                          <li><a href="/#about-id" className="nav-link">About</a></li>
                          <li><a href="/#feature-id" className="nav-link">Features</a></li>
                          <li><a href="/#store-id" className="nav-link">Pricing</a></li>
                          <li><a href="/#faq-id" className="nav-link">FAQs</a></li>
                          <li><a href="/#review-id" className="nav-link">Reviews</a></li>              
                        </ul>
                    </div>
                    {/* This part defines what we show. If authenticatedis true then we display authlinks if it is false then we display guestlinks */}
                    <ul className="navbar-nav">
                        { isAuthenticated ? authLinks: guestLinks} 
                        </ul>
                </header>
            </nav>
        </div>
    );
}
}
// We define the mapStateToProps and add the auth state in there. We then connect it to the Navbar class
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Header);

