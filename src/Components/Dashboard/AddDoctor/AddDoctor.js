import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';

const AddDoctor = () => {

    const [info , setInfo] = useState({});
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = () => {
        const formData = new FormData()
            formData.append('file', file)
            formData.append('name', info.name)
            formData.append('email', info.email)
           
            fetch('http://localhost:5000/addADoctor', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile)
    };

    

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
           <h2>Add Doctor</h2>
           <form className='p-5' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" onBlur={handleBlur} className="form-control" name='email' placeholder="Enter email"/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" onBlur={handleBlur} className="form-control" name="name" placeholder="Name"/>
                </div>
                <div className="form-group py-3">
                    <label for="exampleInputPassword1">Doctor Photo</label>
                    <input type="file" onChange={handleFileChange} className="form-control-file bg-info rounded p-2" id="exampleInputPassword1" name='img' placeholder="Doctor Image"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default AddDoctor;