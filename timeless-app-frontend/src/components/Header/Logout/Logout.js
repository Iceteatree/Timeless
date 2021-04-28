// Import the relevant modules that we need.
import React, { Component } from 'react';
// getting our logout function from our authActions.
import { logout } from '../../../actions/authActions';
// This function connects a React component to a Redux store.
import { connect } from 'react-redux';
// Proptypes is reacts built in type checking tool.
import PropTypes from 'prop-types';

export class Logout extends Component {
    // Checking the type of logout and making sure it is a function.
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    // Rendering logout component. The onClick triggers our logout function within our AuthActions.
    render() {
        return (
            <div>
                <>
                    <button className="btn btn-sm btn-outline-danger m-1 p-0">
                        <div className="nav-link" onClick={this.props.logout} href="#">
                            <span className="text-light"><b>Logout</b></span>
                        </div>
                    </button>
                </>
            </div>
        )
    }
}

// We connect it with the logout action and then exort it.
export default connect(null,{logout})(Logout);
