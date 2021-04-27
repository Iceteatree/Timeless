import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../../actions/authActions';
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

class RegisterModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for register error
            if(error.id === 'REGISTER_FAIL'){
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
        
        const { name, email, password } = this.state;

        // Crete user object
        const newUser = { name, email, password};

        // Attempt to register
        this.props.register(newUser);


    }
    render(){
        return(
            <div className="container">
                <Button className="btn btn-sm btn-light m-1 p-0.5"><NavLink onClick={this.toggle} href="#"><span className="text-dark"><strong>Register</strong></span></NavLink></Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader className="bg-dark text-light" toggle={this.toggle}>
                        Register
                    </ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>):null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
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
                                    style={{marginTop: '2rem'}}
                                    block
                                >Register</Button>
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
//                 <btn className="btn btn-sm btn-light m-1 p-0"><div className="nav-link" onClick={this.toggle} href="#"><span className="text-dark">Register</span></div></btn>
//                 <div className="modal"
//                     isOpen={this.state.modal}
//                     toggle={this.toggle}
//                 >
//                     <div className="modal-header" toggle={this.toggle}>
//                         Register
//                     </div>
//                     <div className="modal-body">
//                         {this.state.msg ? (<div className="alert alert-danger">{this.state.msg}</div>):null}
//                         <form onSubmit={this.onSubmit}>
//                             <div className="form-group">
//                                 <label for="name">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     id="name"
//                                     placeholder="Name"
//                                     className="mb-3"
//                                     onChange={this.onChange}
//                                 />
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
//                                 <button
//                                     className="btn btn-dark"
//                                     style={{marginTop: '2rem'}}
//                                     block
//                                 >Register</button>
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

export default connect(mapStateToProps,{register, clearErrors})(RegisterModal);