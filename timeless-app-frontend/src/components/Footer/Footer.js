import React from 'react'
import './Footer.css'

// Creating a dynamic data copyright footer.
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer-class">
            <h6>Copyright {year} | Alan Kow | Timeless App</h6>          
        </div>
    )
}

export default Footer
