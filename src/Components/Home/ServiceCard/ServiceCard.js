import React from 'react';

const ServiceCard = ({data}) => {
    return (
        <div className='col-md-3 mt-5 mb-5'>
            <img className='img-fluid p-2 h-50' src={data.img} alt=""/>
            <h4>{data.name}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ratione?</p>
        </div>
    );
};

export default ServiceCard;