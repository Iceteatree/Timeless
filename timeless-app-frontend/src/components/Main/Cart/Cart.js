// Import react and all relevant components
import React, { Component } from 'react';
// Import PropTypes for type checking
import PropTypes from 'prop-types';
// Connecting our react with redux store.
import { connect } from 'react-redux';
// Importing the actions that we need for this component
import { getCart, deleteFromCart } from '../../../actions/cartActions';
import { checkout } from '../../../actions/orderActions';
// Import Checkout component.
import Checkout from './Checkout';
// Import our local styling.
import './Cart.css'

// Import reactstrap styling components.
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Alert, Container} from 'reactstrap';

// Create the cart component that displays the users cart. It shows all the items in the user cart and give sthe option to remove them from the cart and gives the option to checkout. Setting the inital state of loaded to false.
class Cart extends Component {

    state = {
        loaded: false,
    }
    // Setting the types needed for this component.
    static propTypes = {
        getCart: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func.isRequired,
        deleteFromCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        cart: PropTypes.object.isRequired,
        checkout: PropTypes.func.isRequired
    }
    // Gets all the cart items using the user id and then sets the state. This is triggereing the getCart action
    getCartItems = async (id) => {
        await this.props.getCart(id);
        this.state.loaded = true;
    }

    // Deletes the cart items using the deleteFromCart action. It takes in the user ID and then the id of the item that needs to be deleted as inputs.
    onDeleteFromCart = (id, itemId) => {
        this.props.deleteFromCart(id, itemId);
    } 
    
    // Render our component. We only get the items from the cart once we have the user laoded. 
    render(){
        const user = this.props.user;
        if(this.props.isAuthenticated && !this.props.cart.loading && !this.state.loaded){
            this.getCartItems(user._id);
        }
        // Checks if user is authenticated first before displaying the cart. 
        return(
            <div className="checkout-container">
                <h1> Checkout </h1>
                {this.props.isAuthenticated ?
                    <>
                        {this.props.cart.cart ? null :
                            <Alert color="info" className="text-center">Your cart is empty!</Alert>
                        }
                    </>
                    : <Alert color="danger" className="text-center">Login to View!</Alert>
                }  
                {/* Display all the items in our cart by mapping them and showing a delete button. */}
                {this.props.isAuthenticated && !this.props.cart.loading && this.state.loaded && this.props.cart.cart?
                <Container>
                    <div className="cart-div row">
                        {this.props.cart.cart.items.map((item)=>(
                            <div className="col-md-4" key={item._id}>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">{item.name}</CardTitle>
                                <CardSubtitle tag="h6">R {item.price}</CardSubtitle>
                                <CardText>Quantity - {item.quantity}</CardText>
                                <Button color="danger" onClick={this.onDeleteFromCart.bind(this, user._id, item.productId)}>Delete</Button>
                            </CardBody>
                        </Card>
                        <br/>
                        </div>
                        ))}
                        {/* After displaying all the items then we have a card component displaying the bill and the Checkout component */}
                        <div class="col-md-12">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Total Cost = R {this.props.cart.cart.bill}</CardTitle>
                                <Checkout
                                    user={user._id}
                                    amount={this.props.cart.cart.bill}
                                    checkout={this.props.checkout}
                                />                   
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                </Container>
                    :null}
            </div>
            
        )
    }
}
// Define the  mapStateToProps 
const mapStateToProps = (state) => ({
    cart: state.cart,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})
// Connect the mapstatetoprops and the methods to the Cart.
export default connect(mapStateToProps, {getCart, deleteFromCart, checkout})(Cart);