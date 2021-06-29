import React from 'react';
import banner from '../../../images/Mask Group 3.png'
const About = () => {
    return (
        <div className='row d-flex justify-content-center align-content-center'>
            <div className="col-md-5">
                <img className="img-fluid h-75" src={banner} alt=""/>
            </div>
            <div className="col-md-5">
                <h1>Expectational Dental <br/> Care, On Your Terms</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio error aut similique ullam animi delectus totam neque. Velit aut vel dolores amet tempora impedit quasi voluptatibus laudantium vero odio.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default About;