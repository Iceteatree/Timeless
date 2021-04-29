// React initialising
import React from 'react'
// Styling
import './Landing.css'

// Simple stateless functional component that basically renders a nice landing page.
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
