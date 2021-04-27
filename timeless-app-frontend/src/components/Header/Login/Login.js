import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/authActions';
import { clearErrors } from '../../../actions/errorActions';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

class LoginModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for login error
            if(error.id === 'LOGIN_FAIL'){
                this.setState({msg: error.msg.msg});
            }
            else{
                this.setState({msg:null});
            }
        }

        // If authenticated, close modal
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
                
            }
        }
    }

    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        
        const {email, password} = this.state;
        const user = {email, password};

        // Attempt to login
        this.props.login(user);
    }
    
    render(){
        return(
            <div className="container">
                <Button className="btn btn-sm btn-light m-1 p-0.5"><NavLink onClick={this.toggle} href="#"><span className="text-dark"><strong>Login</strong></span></NavLink></Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader className="bg-dark text-light" toggle={this.toggle}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>):null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    block
                                >Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
//     render(){
//         return(
//             <div className="container">
//                 <btn className="btn btn-sm btn-light m-1 p-0"><div className="nav-link" onClick={this.toggle} href="/"><span className="text-dark">Login</span></div></btn>
//                 <div className="modal"
//                     isOpen={this.state.modal}
//                     toggle={this.toggle}
//                 >
//                     <div className="modal-header" toggle={this.toggle}>
//                         Login
//                     </div>
//                     <div className="modal-body">
//                         {this.state.msg ? (<div className="alert alert-danger">{this.state.msg}</div>):null}
//                         <form onSubmit={this.onSubmit}>
//                             <div className="form-group">
//                                 <label for="email">Email</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     id="email"
//                                     placeholder="Email"
//                                     className="mb-3"
//                                     onChange={this.onChange}
//                                 />
//                                 <label for="password">Password</label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     id="password"
//                                     placeholder="Password"
//                                     className="mb-3"
//                                     onChange={this.onChange}
//                                 />
//                                 <btn
//                                     className="btn btn-dark"
//                                     style={{marginTop: '2rem'}}
//                                     block
//                                 >Login</btn>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{login, clearErrors})(LoginModal);


// import React, {useState, useEffect} from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { login } from '../../../actions/authActions';
// import { clearErrors } from '../../../actions/errorActions';


// function Login() {
//     const [modal, setModal] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState ("");
//     const [msg, setMsg] = useState(null);
//     const [error, setError] = useState("");
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect((prevProps) => {
//         if(error !== prevProps.error){
//             if(error.id === 'LOGIN_FAIL'){
//                 setMsg(error.msg)
//             } else {
//                 setMsg(null)
//             }
//         }
//         if (modal) {
//             if(isAuthenticated){
//                 setModal(!modal)
//             }
//         }
//     }, [])

    
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Login

