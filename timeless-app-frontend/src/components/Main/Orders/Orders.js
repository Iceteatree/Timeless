// Import relevant react modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Import relevant action needed for this component
import { getOrders } from '../../../actions/orderActions';
// importing styling components and css
import {Card, CardBody, CardTitle, CardSubtitle, Alert, Container} from 'reactstrap';
import './Order.css';

// This page displays all the orders users have placed till now. We use the function getOrders from the actions.
class Orders extends Component {

    state = {
        loaded: false,
    }
    // Setting types
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        order: PropTypes.object.isRequired,
        getOrders: PropTypes.func.isRequired
    }

    // This method triggers the getOrders action and passes the userid as an input.
    ongetOrders = async (id) => {
        await this.props.getOrders(id);
        this.state.loaded = true;
    }

    // Render component. Once we are authenticated and have a user, get all the user orders and display them in a card bbased view using the map function.
    render(){
        const user = this.props.user;
        if(this.props.isAuthenticated && !this.props.order.loading && !this.state.loaded){
            this.ongetOrders(user._id);
        }
        return(
            <div className="order-div">
                <h1>Previous Orders</h1>
                {this.props.isAuthenticated ?
                    <>
                        {this.props.order.orders!==[] ? null :
                            <Alert color="info" className="text-center">You have no orders!</Alert>
                        }
                    </>
                    : <Alert color="danger" className="text-center">Login to View!</Alert>
                }

                {this.props.isAuthenticated && !this.props.order.loading && this.state.loaded && this.props.order.orders.length?
                    <Container> 
                        <div className="row">
                            {this.props.order.orders.map((order)=>(
                                <div className="col-md-12">
                                    <Card key="item._id">
                                        <CardBody>
                                            <CardTitle tag="h4">{order.items.length} items - Total cost: R. {order.bill}</CardTitle>
                                            <div className="row">
                                            {order.items.map((item)=>(
                                                <div className="col-md-4">
                                                    <Card className="mb-2">
                                                        <CardBody>
                                                            <CardTitle tag="h5">{item.name} ({item.quantity} pieces)</CardTitle>
                                                            <CardSubtitle tag="h6">R. {item.price}/piece</CardSubtitle>
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            ))}
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <br/>
                                </div>
                                
                            ))}
                        </div>
                    </Container>
                :null}
            </div>
        )
    }
}

// Next, we define our mapStateToProps, and then we connect the functions and mapStateToProps with the Orders component.
const mapStateToProps = (state) => ({
    order: state.order,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})

export default connect(mapStateToProps, {getOrders})(Orders);