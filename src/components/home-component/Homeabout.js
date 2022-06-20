import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Container  from 'react-bootstrap/Container';


import '../sass/layout/home-about.scss'


const Homeabout = () => {
    return (
      <Container className='fluid' >

        <Row className='home-about align-items-center gy-5' md={2} lg={2}>
          
          <Col sm={12} >
            <StaticImage
            
             alt='A photo of a computer with a graph'
             className='img-fluid' 
             src='https://ik.imagekit.io/hjsantos797/My_website_images/growth-min_4m02t8V77.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652612290379' />
          </Col>

          <Col className='home-about-content text-center' sm={12}>
          <h1 >See your Agency grow</h1>
              <p>
              Every Agency has different challenges and goals. We develop custom solutions for your agency based on your needs, which lead to growth within your business.
              </p>
          </Col>

          </Row>
      </Container>
    );
};

export default Homeabout;