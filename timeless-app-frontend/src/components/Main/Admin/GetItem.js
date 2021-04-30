// Import React modules.
import React, { Component } from 'react';
// Importing Reacts built in type system.
import PropTypes from 'prop-types';
// Connect our react with our redux store using connect module.
import { connect } from 'react-redux';
// Import the redux actions we need for this component
import { getItems } from '../../../actions/itemActions';
import { deleteItem } from '../../../actions/itemActions'
// Using reactstrap for some bootstrap type styling. The other styling will be handled by the global cdn Bootstrap.
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';

// Create a store component that will be used to display our store items directly from our backend.
class GetItems extends Component {

    // We use component did mount to trigger our getItems action after render.
    componentDidMount(){
        this.props.getItems();
    }

    // Setting the types for this component.
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        deleteItem: PropTypes.func,
        user: PropTypes.object
    }

    // this method triggers our addToCart action taking in the id of the user and the id of the productId as input values.
    deleteItem = async (productId) => {
        await this.props.deleteItem(productId, 1);
    }

    // Render our component. We destructure our variables from our prop item within the item action so that we can use them here.
    render(){
        const { items } = this.props.item;
        // Did this because Heroku isn't playing nicely.
        const items2 = Array.from(items)
        // We map the data from the items array we retrieved from our action and then use that data to create a Card that displays our store items. We also add a button that appears if the user is Authenticated(logged in) and that button triggers the AddtoCart action passing in the user id and the item id.
        return (
            <div className='get-items-table'>
            <h1>Items Database</h1>
            <Container>
                <div className="row">
                {items2.map((item)=>(
                    <div className="col-md-4" key={item._id}>
                    <Card className="item-card-body mb-4">
                    <CardImg top width="100%" src={item.img_url} alt="watch image"/>
                        <CardBody>  
                            <CardTitle tag="h5">{item.title}</CardTitle>
                            <CardSubtitle tag="h6">R {item.price}</CardSubtitle>
                            <CardText>ID no: {item._id}</CardText>
                            <CardText>{item.category}</CardText>
                            <CardText>{item.description}</CardText>
                            {this.props.isAuthenticated ? 
                                <Button
                                    color="danger"
                                    size="md"
                                    onClick={this.deleteItem.bind(this, item._id)}
                                    >Delete
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
})

// We use the connect function to bind the actions and the mapStateToProps with the Home component.
export default connect(mapStateToProps, {getItems, deleteItem})(GetItems);