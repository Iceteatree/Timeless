import React from 'react'
import './Reviews.css'

function Reviews() {
    return (
        <div className='review-class' id="review-id">
            <h1>Customer Reviews</h1>
            <div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active container-fluid">
                        <h2 className="testimonial-text">"These are the sexiest watches I've ever seen in my life. The value for money is incredible"</h2>
                        <img className="testimonial-image" src="img/lady-img.jpg" alt="lady-profile" />
                    <em><h2>Mary, Cape Town</h2></em>
                    </div>
                    <div className="carousel-item container-fluid">
                        <h2 className="testimonial-text">"I got one as a birthday gift. It really makes me seem so much cooler. Love it!"</h2>
                        <img className="testimonial-image" src="img/sipho.jpg" alt="man-profile" />
                    <em><h2>Sipho, Johannesburg</h2></em>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    )
}

export default Reviews
