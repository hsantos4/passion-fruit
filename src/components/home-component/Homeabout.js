import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Container  from 'react-bootstrap/Container';


import '../sass/layout/home-about.scss'


const Homeabout = () => {
    return (
      <Container className='fluid' >

        <Row className='home-about align-items-center gy-2' md={2} lg={2}>
          
          <Col sm={12} >
            <StaticImage
            
             alt='A photo of a computer with a graph'
             className='img-fluid' 
             src='https://ik.imagekit.io/hjsantos797/My_website_images/about-min_sF887DPlc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650331579823' />
          </Col>

          <Col className='home-about-content text-center' sm={12}>
          <h1 >To see your insurance agency grow</h1>
              <p>
                Specializing in a head-ache free web service to help your insurance agency see growth.
              </p>
          </Col>

          </Row>
      </Container>
    );
};

export default Homeabout;