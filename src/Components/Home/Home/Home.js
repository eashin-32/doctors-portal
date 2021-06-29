import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import Banner from '../Banner/Banner';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Testimonail from '../Testimonial/Testimonail';
import Blog from '../Blog/Blog';
import OurDoctor from '../OurDoctor/OurDoctor';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServicesInfo></ServicesInfo>
            <About></About>
            <Banner></Banner>
            <Testimonail></Testimonail>
            <Blog></Blog>
            <OurDoctor></OurDoctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;