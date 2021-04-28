// Importing React and other relevant modules.
import React, { Component } from 'react';
// Connects our React with our redux store.
import { connect } from 'react-redux';
// React built in Type checking 
import PropTypes from 'prop-types';
// Importing login and clear error actions.
import { login } from '../../../actions/authActions';
import { clearErrors } from '../../../actions/errorActions';
// Using reactstrap for some bootstrap type styling. The other styling will be handled by the global cdn Bootstrap.
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

// This component handles our login functionality. We initialise the state with default values.
class LoginModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    };

    // Making sure our types are correct.
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    // Use our lifecycle function componentDidUpdate to take in the previous props as a parameter. We check if the current error object is equal to the previous error. If no, we check whether the error is from Login fail and if yes we set the message as errors message else we set the message to null.
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

        // If authenticated, close the modal
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
                
            }
        }
    }
    // Toggle method that triggers the clearErrors function from the error actions and then we set the state of the modal to the opposite of its current modal state.
    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    // this method just updates the valuje of the email and the password as we type them in the form fields.
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    // This method takes in the email and password from the state and then passes them to the login action.
    onSubmit = (e) => {
        e.preventDefault(); 
        
        const {email, password} = this.state;
        const user = {email, password};

        // Attempt to login using login action
        this.props.login(user);
    }
    
    // Render our component. Creates a form that takes in user input.
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

// Define a mapStatetoProps and get the isAuthenticated and error from the state we set up in the reducer files. 
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

// Connect the Login Modal to these state and action functions and then export it.
export default connect(mapStateToProps,{login, clearErrors})(LoginModal);

