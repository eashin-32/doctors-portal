import React from 'react';
import Fluoride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesInfo = () => {

    const serviceData = [
        {
            name:'Fluoride Treatment',
            img:Fluoride
        },
        {
            name:'Fluoride Treatment',
            img:cavity
        },
        {
            name:'Fluoride Treatment',
            img:whitening
        },
    ]
    return (
        <section>
            <div className="text-center">
                <h4 className="text-info">OUR SERVICES</h4>
                <p className="display-3">
                    Services We Provide
                </p>
            </div>
           <div className="row d-flex justify-content-around text-center">
            {
                serviceData.map(service => <ServiceCard data={service}></ServiceCard>)
            }
           </div>
        </section>
    );
};

export default ServicesInfo;