import React from 'react';
import './Testmonial.css';
import img1 from '../../../images/Ellipse 1.png';
import img2 from '../../../images/Ellipse 2.png';
import img3 from '../../../images/Ellipse 3.png';
import Testimonials from '../Testimonials/Testimonials';


const Testimonail = () => {

    const reviewsData = [
        {
            name:'Wilson Henry',
            img:img1,
            address:'california',
            message:'Thank you so much. I feel so relaxed now, ready for my wedding!  All the best for you!I will definitely recommend you!'
        },
        {
            name:'Rihana Schmenad',
            img:img2,
            address:'california',
            message:'Dear Lei, that was perhaps the best massage I have ever had. A truly wonderful experience...Thank you so much...'
        },
        {
            name:'Kristina',
            img:img3,
            address:'california',
            message:'Thank you so much. I feel so relaxed now, ready for my wedding! All the best for you!I will definitely recommend you'
        }
    ]
    return (
        <section className='mt-5'>
            <div className="title mx-3">
            <small className="text-info fw-bolder">TESTIMONIAL</small>
            <h3>What's Our patients <br />
            says</h3>
            </div>
            <div className="row">
                {
                    reviewsData.map(review => <Testimonials data={review}></Testimonials>)
                }
            </div>
        </section>
    );
};

export default Testimonail;