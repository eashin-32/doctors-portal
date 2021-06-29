import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Dashboard = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date)
    }

    useEffect(() =>{
        fetch("http://localhost:5000/appointmentsByDate",{
            method:"POST",
            headers:{'content-type': 'application/json'},
            body:JSON.stringify({date: selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[selectedDate])

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5">
            <h1>Appointment</h1>
                    <Calendar className='m-5'
                        onChange={handleDateChange}
                        value={new Date()}
                    />
            </div>
            <div className="col-md-5">
                <AppointmentsByDate selectedDate={selectedDate} key={appointments._id} appointments={appointments}></AppointmentsByDate>
            </div>
        </div>
    );
};

export default Dashboard;