import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './infoCard.css'

const InfoCard = ({data}) => {
    
    return (
        <div className={`col-md-3 rounded bg-${data.background}`}>
          <div className="d-flex text-white p-3 align-items-center justify-content-center">
            <div>
            <FontAwesomeIcon className='icon' icon={data.icon} />
            </div>
            <div className=''>
                <p className='fw-bolder'>{data.title}</p>
                <small>{data.des}</small>
            </div>
          </div>
        </div>
    );
};

export default InfoCard;