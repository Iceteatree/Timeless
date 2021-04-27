import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-class container-fluid' id="about-id">
            <h1>About Timeless</h1>
            <div className="row">
                <div className="about-text col-md-6">
                    <p>About text goes in here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat quis nulla a rutrum. Donec feugiat mattis tortor, eu accumsan magna mollis in. Curabitur facilisis a tortor at pretium. Proin tempor molestie ante at convallis. Quisque convallis laoreet lacus ut bibendum. Morbi lobortis arcu elementum congue consectetur. Proin ac cursus mauris. </p>
                </div>
                <div className="about-img-div col-md-6">
                    <img className="about-img" src="./img/wrist-watches.jpg" alt="group of watches" />
                </div>
            </div>
        </div>
    )
}

export default About
