import React from 'react';
import './BookCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({data,date}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
   
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 cards">
            <div className='p-4 shadow-sm text-center'>
                <h5 className='text-info'>{data.subject}</h5>
                <h6 className='text-muted'>{data.visitingHour}</h6>
                <small>{data.totalSpace} Space Available</small><br />
                <button onClick={openModal} className="btn mt-1 btn-info text-capitalize text-white fw-bold">Book appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} date={date} closeModal={closeModal} title={data.subject}></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;