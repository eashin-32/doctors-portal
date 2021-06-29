import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
   
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  

  Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen,setIsOpen,closeModal, title,date}) => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      data.service = title;
      data.date = date;
      data.created = new Date();
 console.log(data)
      fetch('http://localhost:5000/addAppointment',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(data)
          
      })
      .then(res => res.json())
      .then(success =>{
            if(success){
                closeModal()
                alert('Appointment Created Successfully')
            }
      })
      
    };
  
    console.log(watch("example"));
    
  
    return (
        <div>
            
        <Modal className=''
          isOpen={modalIsOpen}
         
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className='text-center text-info'>{title}</h2>
          <p className="text-center"><small>{date.toDateString()}</small></p>
          
            <form className="p-3 " onSubmit={handleSubmit(onSubmit)}>
            <input className='form-control mb-2' placeholder='Your Name' {...register("name")} /> 
            {errors.name?.type === 'required' && "First name is required"}

            <input placeholder='Phone' className='form-control mb-2'
            {...register("phone", {
                minLength: 1
              })}
            />
            {errors.phone?.type === 'required' && "First name is required"}

            <input className='form-control mb-2' type='email' placeholder='Your Email' {...register("email")} /> 
            {errors.name?.type === 'required' && "First name is required"}

            <select className='form-control mb-2' {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <input type="number" className='form-control mb-2' placeholder='Age' {...register("age", { min: 1, max: 99 })} />
            {errors.age?.type === 'required' && "First name is required"}
            <p className=""><input  className='btn btn-info text-white fw-bold d-block ms-auto' type="submit" /></p>
          </form>
        </Modal>
        </div>
    );
};

export default AppointmentForm;