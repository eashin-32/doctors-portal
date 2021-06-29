import React from 'react';

const AppointmentsByDate = ({appointments,selectedDate}) => {
    return (
         <div className="mt-5 me-5">
            <div className="shadow p-3">
                <p className='d-flex' >
                    <p className="text-info fw-bold">Appointments</p> 
                    <p className="text-secondary ms-auto">{selectedDate.toDateString()}</p>
                </p>

                <p className='d-flex mt-5' >
                    <p className="t fw-bold">Name</p> 
                    <p className="fw-bold ms-auto">Email</p>
                </p>
                    
                          <div className='d-flex'>
                          <ul className="list-unstyled p-2">
                           
                           {
                               appointments.map(data => <li>{data.name}</li>)
                           }
                           </ul>
                           ,<ul className='list-unstyled ms-auto'>
                           {
                               appointments.map(data => <li className=''>{data.email}</li>)
                           }
                          
                           </ul>
                          </div>
           </div>             
        </div>
    );
};

export default AppointmentsByDate;