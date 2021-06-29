import React from 'react';

const Doctor = ({doctor}) => {
    return (
        <div className='col-md-4 text-center mb-4'>
            <img className="img-fluid" src={`http://localhost:5000/${doctor.img}`} alt="" />
            <p className="fw-bold">{doctor.name}</p>
            <small>{doctor.phone}</small>
        </div>
    );
};

export default Doctor;