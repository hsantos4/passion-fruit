import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import  Container  from 'react-bootstrap/Container';

import './sass/layout/grid-layout.scss'


const WhoweAre = () => {
    return (
        <Container className='mission-vision ' fluid="sm"> 
            <Row className='grid-row align-items-center' md={2} lg={2}>
                <Col sm={12}>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/home-about-img-min_VTi9e3TwS.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1650331582425' 
                    alt='This is a picture of the owner'
                    class='img-fluid'
                    />
                   
                </Col>
                <Col sm={12}>
                    <h3>Who am I</h3>
                    <p>My Name is Hector and I am the creator of Passion Fruit Media Clt </p>
                    
                    <p>This business came from a passion for developing websites and seeing growth take place in insurance agencies.</p>
                
                    <p>
                        I have spent the last 4 years practicing SEO, coding 
                        and studying the best practices when it comes to search engine marketing.
                    </p>
                </Col>
            </Row>

            
            <Row className='grid-row align-items-center' md={2} lg={2}>
                <Col sm={12} md={ {order:2} }>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/what-we-do-about-min_VCiEcfddu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650331497335' 
                    alt=''
                    className='img-fluid'
                    />

                    
                </Col>
                <Col className='about-me-who-we-are' sm={12} md={ {order:1} }>
                    <h3>What I do</h3>
                    <p>I provide specialized services to get insurance agency more awareness, leads and more clients.I do this by offering insurance agencies high quality web products that produce results.</p>
                    
                 
                </Col>
            </Row>
        </Container>
    );
};

export default WhoweAre;