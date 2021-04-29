// Import React and Component module
import React, { Component } from 'react';
// Importing reactstrap components.
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
// Connect module used to connect React with redux store.
import { connect } from 'react-redux';
// Get the addItem action
import { addItem } from '../../../actions/itemActions';
// React module Proptypes for type checking.
import PropTypes from 'prop-types';

// Create an AddItem component that will add items to our database. Initialising state with these empty variables.
class AddItem extends Component {
    state = {
        title: '',
        description: '',
        category: '',
        price: '',
        img_url: ''
    }

    // Setting type for isAuthenticated.
    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    // this method changes the state of the name to equal the value of the user input.
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    // This method triggers on submit. It changes the default state of the initial variables to the newItem variables using the addItem action from the itemActions.
    onSubmit = async (e) => {
        e.preventDefault();

        const newItem = {
            title: this.state.title,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price,
            img_url: this.state.img_url
        }

        await this.props.addItem(newItem);

        alert('Item added successfully');
    }
// Render our component. Basically just a form for some user inputs.
    render(){
        return(
            <div>
                <Container>
                    <h2 className="text-center mb-3">Add a new Item</h2>
                    { this.props.isAuthenticated ?
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title of the item"
                                onChange={this.onChange}
                            />
                            <br/>
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Description of the item"
                                onChange={this.onChange}
                            />
                            <br/>
                            <Label for="category">Category</Label>
                            <Input 
                                type="text"
                                name="category" 
                                id="category"
                                placeholder="Category of the item"
                                onChange={this.onChange}
                                >
                            </Input>
                            <br/>
                            <Label for="img_url">Img URL</Label>
                            <Input 
                                type="text"
                                name="img_url" 
                                id="img_url"
                                placeholder="Image URL of the item"
                                onChange={this.onChange}
                                >
                            </Input>
                            <br/>
                            <Label for="price">Price</Label>
                            <Input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Price of the item"
                                onChange={this.onChange}
                            />
                            
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >Add Item</Button>
                        </FormGroup>
                    </Form> : 
                    <Alert className="text-center" color="danger">Login to add items!</Alert>
                    }
                </Container>
            </div>
        )
    }
}
// define mapStatetoProps so that we can set our item and isAuthenticated.
const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
});

// Connect our mapStatetoProps and link it with the AddItem component.
export default connect(mapStateToProps,{addItem})(AddItem);