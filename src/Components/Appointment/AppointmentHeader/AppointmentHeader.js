import React from 'react';
import chair from '../../../images/chair.png'
import './AppointmentHeader.css'
import Navbar from '../../Shared/Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main className='header'>
            <Navbar></Navbar>
            <div className=" row headerMain d-flex align-items-center">
            <div className="col-md-4 offset-md-1 ">
                    <h1>Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6 ">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
        
            </div>
        </main>
        
    );
};

export default AppointmentHeader;