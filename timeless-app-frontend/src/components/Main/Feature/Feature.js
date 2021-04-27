import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';
import './Feature.css'

function Feature() {
    return (

        <div className='features-class' id='feature-id'>
            <h1>Features</h1>
        <div className="container feature-card-container">
          <div className="row">
          <Card className='features-cards col-md-4'>
              <CardBody>
            <CardTitle tag="h5">Hand-crafted</CardTitle>
            <CardText>Hand-crafted watches from our artisans from Germany, Switzerland and of course South Africa. Our craftsman have decades worth of experience, making each item more unique than a unicorn at the end of a rainbow.</CardText>
            <CardText>
              <small className="text-muted">Elgance made easy</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className='features-cards col-md-4'>
              <CardBody>
            <CardTitle tag="h5">Eco-Friendly</CardTitle>
            <CardText>Our watches are made from the most eco-friendly materials. We care about our world.</CardText>
            <CardText>
              <small className="text-muted">We care</small>
            </CardText>
          </CardBody>
        </Card>
        
        <Card className='features-cards col-md-4'>
              <CardBody>
            <CardTitle tag="h5">Affordable</CardTitle>
            <CardText>It is important that we try and spread the love. With our suppliers we have managed to make our watches as affordable as possible. No one gets left behind.</CardText>
            <CardText>
              <small className="text-muted">Cheap cheap cheap</small>
            </CardText>
          </CardBody>
        </Card>
        
        </div>
      </div>
   
      <Card className="features-cards-img img-fluid">
      <CardImg src="./img/men-watch.jpg" alt="Card image cap" />
      </Card>
      {/* <Card className="features-cards-img">
      <CardImg src="./img/mens-watch-2.jpg" alt="Card image cap" />
      </Card> */}
      
      
    </div>
  );
};


export default Feature
