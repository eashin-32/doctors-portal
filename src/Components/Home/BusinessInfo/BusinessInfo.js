import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone , faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinessInfo = () => {
    const infosData = [
        {   
            title:"Opening Hours",
            des:'lorem ipsum dollar set emmet',
            background:'info',
            icon:faClock,
            key:1
        },
        {
            title:"Visit out location",
            des:'Brooklyn, NY 10059, United States',
            background:'dark',
            icon:faMapMarkerAlt,
            key:2
        },
        {
            title:"Contact Now",
            des:'+1034 788 385',
            background:'info',
            icon:faPhone,
            key:3
        },
    ]
    return (
        <section className='row d-flex justify-content-between mx-5'>
           {
               infosData.map(info => <InfoCard key={info.key} data={info}></InfoCard>)
           }
           
        </section>
    );
};

export default BusinessInfo;