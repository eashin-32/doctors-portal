import React from 'react';
import './Testmonials.css'

const Testimonials = ({data}) => {
    return (
        <div className="col-md-4 mt-3 p-5">
           <div className="shadow p-5">
           <p className='fw-bold'>{data.message}</p> 

            <div className='d-flex align-items-center justify-content-center'>
            <div>
                <img className='p-2 img-fluid' src={data.img} alt="" />
            </div>
            <div>
                <h6 className='text-info'>{data.name}</h6>
                <small>{data.address}</small>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Testimonials;