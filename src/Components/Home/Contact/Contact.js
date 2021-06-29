import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className='contact-sec mt-5'>
            <div className="mt-5 text-center mx-3">
            <h5 className="text-info fw-bolder">CONTACT US</h5>
            <h2 className='text-white'>Always Connect With Us</h2>
            </div>
            <div className="input-box text-center mt-5">
                <input type="email" name="" id="email" placeholder='Email'/><br />
                <input id='subject' type="text" placeholder='Subject'/><br />
                <textarea name="" id="textarea" cols="60" rows="5" placeholder='Message'></textarea><br />
                <input className="btn submit btn-info" type="submit" value="Submit" />
            </div>
        </section>
    );
};

export default Contact;