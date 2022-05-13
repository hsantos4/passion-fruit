import * as React from 'react';


import Carousel from 'react-bootstrap/Carousel';


import './sass/component/cardslider.scss';

const Cardslider = () => {
    return(
      <Carousel variant='dark'>
      <Carousel.Item>
      <div className='bi-carousel-bg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill='currentColor' className='bi bi-carousel bi-columns' viewBox="0 0 16 16">
        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z"/>
            </svg>
      </div>
        <Carousel.Caption>
          <h3>Web Design & Development</h3>
          <p>Custom web design to help clients find the right information</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className='bi-carousel-bg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill='currentColor' className='bi bi-carousel bi-cloudy-fill' viewBox="0 0 16 16">
        <path d="M13.405 7.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 13H13a3 3 0 0 0 .405-5.973z"/>
            </svg>
      </div>
    
        <Carousel.Caption>
          <h3>Hosting & Maintenance</h3>
          <p>Handling the stress of maintianing your website.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className='bi-carousel-bg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill='currentColor' className='bi bi-carousel bi-file-bar-graph' viewBox="0 0 16 16">
        <path d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"/>
        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg>
      </div>
        <Carousel.Caption>
          <h3>Search Engine Marketing</h3>
          <p>Helping your agency reach more people. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    );
};

export default Cardslider;