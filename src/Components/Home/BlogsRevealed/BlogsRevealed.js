import React from 'react';

const BlogsRevealed = ({data}) => {
    return (
        
             <div className="col-md-4 mt-3 p-5">
           <div className="shadow-sm p-5">
           <div className='d-flex align-items-center justify-content-center'>
            <div>
                <img className='p-2 img-fluid' src={data.img} alt="" />
            </div>
            <div>
                <h6 className='text-info'>{data.name}</h6>
                <small>{data.address}</small>
            </div>
            </div>
           <p className='fw-600'>{data.message}</p> 

            </div>
        </div>
        
    );
};

export default BlogsRevealed;