import * as React from 'react';
import { Helmet } from "react-helmet"

import Cardslider from '../components/Cardslider.js';
import Homegrid from '../components/Homegrid.js';
import Homevision from '../components/Homevision.js';
import Form from '../components/Form.js';

import Hero from '../components/home-component/Hero.js';
import Homeabout from '../components/home-component/Homeabout.js';
import Herobanner from '../components/home-component/Herobanner.js';


const HomePage = () => {
  return(
    <main>
      <Helmet>
        <title>Passion Fruit Media Clt | Helping insurance agency reach the online audience.</title>
        <meta name="description" content="Offering insurance agencies web services to reach the online audience"/>
      </Helmet>
      
      <div className='home-container'>
        <Hero />
        <Homeabout />
      
        <div className='slider-container'>
            <h3>
              Services we offer your agency
            </h3>
          <div className='home-services'>
           <Cardslider />
          </div>
        </div>
      
        <Homevision />
        <Herobanner />
      
      <Homegrid />
          <Form />
      </div>
    </main>
  );
};



export default HomePage;