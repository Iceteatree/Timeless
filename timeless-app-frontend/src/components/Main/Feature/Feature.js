import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';
import './Feature.css'

function Feature() {
    return (

        <div className='features-class' id='feature-id'>
            <h1>Features</h1>
        <div className="container-fluid feature-card-container">
        <Card className='features-cards'>
            <CardBody>
          <CardTitle tag="h5">Hand-crafted</CardTitle>
          <CardText>Hand-crafted watches made from the most eco-friendly materials. Our craftsman have decades worth of experience, making each item more unique than a unicorn at the end of a rainbow.</CardText>
          <CardText>
            <small className="text-muted">Elgance made easy</small>
          </CardText>
        </CardBody>
      </Card>
      <Card className='features-cards'>
            <CardBody>
          <CardTitle tag="h5">Hand-crafted</CardTitle>
          <CardText>Hand-crafted watches made from the most eco-friendly materials. Our craftsman have decades worth of experience, making each item more unique than a unicorn at the end of a rainbow.</CardText>
          <CardText>
            <small className="text-muted">Elgance made easy</small>
          </CardText>
        </CardBody>
      </Card>
      
      <Card className='features-cards'>
            <CardBody>
          <CardTitle tag="h5">Hand-crafted</CardTitle>
          <CardText>Hand-crafted watches made from the most eco-friendly materials. Our craftsman have decades worth of experience, making each item more unique than a unicorn at the end of a rainbow.</CardText>
          <CardText>
            <small className="text-muted">Elgance made easy</small>
          </CardText>
        </CardBody>
      </Card>
      
   
      </div>
   
      <Card className="features-cards-img">
      <CardImg src="./img/men-watch.jpg" alt="Card image cap" />
      </Card>
      <Card className="features-cards-img">
      <CardImg src="./img/mens-watch-2.jpg" alt="Card image cap" />
      </Card>
      
      
    </div>
  );
};


export default Feature
