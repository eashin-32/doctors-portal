import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import BookAppointment from '../BookAppointment/BookAppointment';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
            
        </div>
    );
};

export default Appointment;