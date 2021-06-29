import React from 'react';
import chair from '../../../images/chair.png'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main className="row headerMain d-flex align-items-center">
           
           <div className="col-md-4 offset-md-1 ">
                <h1>Your New Smile <br/> Start Here</h1>
                <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias fugit saepe ullam pariatur, facilis voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem architecto eaque voluptatibus ea odit!
                </p>
                <a href="/appointment"><button className="btn btn-primary">GET APPOINTMENT</button></a>
            </div>
            <div className="col-md-6 ">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
           
        </main>
    );
};

export default HeaderMain;