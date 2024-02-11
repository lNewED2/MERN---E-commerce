import React from 'react';
import Banner from '../../conponents/Banner';
import Categories from './Categories';
import SpecialProduct from './SpeciaProduct';
import Testimonials from './Testimonials';
import OurService from './OurService';



const Home = () => {
  return (
    <div>
        <Banner />
        <Categories />
        <SpecialProduct />
        <Testimonials />
        <OurService />
    </div>
  )
}

export default Home;