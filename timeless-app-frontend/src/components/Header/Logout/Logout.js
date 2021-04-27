import { Component, Fragment } from 'react';
import { logout } from '../../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <Fragment>
                    <button className="btn btn-sm btn-outline-danger m-1 p-0">
                        <div className="nav-link" onClick={this.props.logout} href="#">
                            <span className="text-light"><b>Logout</b></span>
                        </div>
                    </button>
                </Fragment>
            </div>
        )
    }
}

export default connect(null,{logout})(Logout);
