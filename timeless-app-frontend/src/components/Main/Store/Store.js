// Import React modules.
import React, { Component } from 'react';
// Import our local styling
import './Store.css'
// Importing Reacts built in type system.
import PropTypes from 'prop-types';
// Connect our react with our redux store using connect module.
import { connect } from 'react-redux';
// Import the redux actions we need for this component
import { getItems } from '../../../actions/itemActions';
import { addToCart } from '../../../actions/cartActions';
// Using reactstrap for some bootstrap type styling. The other styling will be handled by the global cdn Bootstrap.
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';

// Create a store component that will be used to display our store items directly from our backend.
class Store extends Component {

    // We use component did mount to trigger our getItems action after render.
    componentDidMount(){
        this.props.getItems();
    }

    // Setting the types for this component.
    static propTypes = {
        // Disabled the two below because they don't play nice with Heroku. Uncomment if viewing locally.
        // getItems: PropTypes.func.isRequired,
        // item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func,
        user: PropTypes.object
    }

    // this method triggers our addToCart action taking in the id of the user and the id of the productId as input values.
    onAddToCart = async (id, productId) => {
        await this.props.addToCart(id, productId, 1);
        alert ('Item added to Cart');
    }

    // Render our component. We destructure our variables from our prop item within the item action so that we can use them here.
    render(){
        const { items } = this.props.item;
        // Did this because Heroku isn't playing nicely.
        const items2 = Array.from(items)
        console.log(items2)
        const user = this.props.user;
        // We map the data from the items array we retrieved from our action and then use that data to create a Card that displays our store items. We also add a button that appears if the user is Authenticated(logged in) and that button triggers the AddtoCart action passing in the user id and the item id.
        return (
            <div className='store-class' id='store-id'>
            <h1>Store</h1>
            <Container>
                <div className="row">
                {items2.map((item)=>(
                    <div className="col-md-4" key={item._id}>
                    <Card className="item-card-body mb-4">
                    <CardImg top width="100%" src={item.img_url} alt="watch image"/>
                        <CardBody>  
                            <CardTitle tag="h5">{item.title}</CardTitle>
                            <CardSubtitle tag="h6">R {item.price}</CardSubtitle>
                            <CardText>{item.category}</CardText>
                            <CardText>{item.description}</CardText>
                            {this.props.isAuthenticated ? 
                                <Button
                                    color="success"
                                    size="sm"
                                    onClick={this.onAddToCart.bind(this, user._id, item._id)}
                                    >Add To Cart
                                </Button> : null}
                        </CardBody>
                    </Card>
                    </div>
                ))}
                 </div>
            </Container>
            </div>
        )
    }
}

// We use mapStatetoProps which has item user and isAuthenticated defined in there. 
const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

// We use the connect function to bind the actions and the mapStateToProps with the Home component.
export default connect(mapStateToProps, {getItems, addToCart})(Store);