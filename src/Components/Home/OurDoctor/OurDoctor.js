import React, { useEffect, useState } from 'react';
import doctor from '../../../images/5790-removebg.png'
import Doctor from '../Doctor/Doctor';

const OurDoctor = () => {
    const [doctor , setDoctor] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:5000/addADoctor')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <section>
            <div className="mt-5 text-center mx-3">
            <h5 className="text-info fw-bolder">LETS MEET OUR DOCTOR</h5>
            </div>
            <div className="row">
                {
                    doctor.map(data => <Doctor doctor={data}></Doctor>)
                }
            </div>
        </section>
    );
};

export default OurDoctor;