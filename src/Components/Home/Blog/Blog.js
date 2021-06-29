import React from 'react';
import img1 from '../../../images/Ellipse 1.png';
import img2 from '../../../images/Ellipse 2.png';
import img3 from '../../../images/Ellipse 3.png';
import BlogsRevealed from '../BlogsRevealed/BlogsRevealed';


const Blog = () => {
    const blogData = [
        {
            name:'Wilson Henry',
            img:img1,
            address:'14 April 2017',
            message:'Thank you so much. I feel so relaxed now, ready for my wedding!  All the best for you!I will definitely recommend you!'
        },
        {
            name:'Rihana Schmenad',
            img:img2,
            address:'20 December 2019',
            message:'Dear Lei, that was perhaps the best massage I have ever had. A truly wonderful experience...Thank you so much...'
        },
        {
            name:'Kristina',
            img:img3,
            address:'11 September 2020',
            message:'Thank you so much. I feel so relaxed now, ready for my wedding! All the best for you!I will definitely recommend you'
        }
    ]
    return (
        
            <section className='mt-5'>
            <div className=" text-center mx-3">
            <small className="text-info fw-bolder">OUR BLOG</small>
            <h3>From Our Blog News</h3>
            </div>
            <div className="row">
                {
                    blogData.map(review => <BlogsRevealed data={review}></BlogsRevealed>)
                }
            </div>
        </section>
        
    );
};

export default Blog;