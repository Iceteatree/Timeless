import React, { Component } from 'react';
import './Store.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../../../actions/itemActions';
import { addToCart } from '../../../actions/cartActions';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';

class Store extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    static propTypes = {
        // getItems: PropTypes.func.isRequired,
        // item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        // addToCart: PropTypes.func,
        user: PropTypes.object.isRequired
    }

    onAddToCart = async (id, productId) => {
        await this.props.addToCart(id, productId, 1);
        alert ('Item added to Cart');
    }

    render(){
        const  items  = this.props.item;
        const user = this.props.user;
        return (
            <div className='store-class' id='store-id'>
            <h1>Store</h1>
            <Container>
                <div className="row">
                {items.map((item)=>(
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

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {getItems, addToCart})(Store);