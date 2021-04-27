import React from 'react'
import './Landing.css'

function Landing() {
    return (
        <div className="landing-class" style={{ backgroundImage: "url(/img/landing.jpg)", backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat:"no-repeat" }}>
            <h1><em>Timeless</em></h1>
            <div className='sub-heading-landing'>
                <h3>Modern Elegance Refined</h3>
            </div>
        </div>
    )
}

export default Landing
