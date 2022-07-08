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
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/about-who-we-are-min_69t-EG5AT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653137152300' 
                    alt='This is a picture of the owner'
                    class='img-fluid'
                    />
                   
                </Col>
                <Col className='mission-vision-conten' sm={12}>
                    <h3>Who we are</h3>
                    <p>Passion Fruit Clt is a group of incredibly passionate individuals who love working with technology. </p>
                    <p>Our passion and life-long experience in Web Development and Search Engine Marketing has enabled us to create cutting edge websites and marketing campaigns for local businesses.</p> 
                    <p>We build our sites with a focus on user friendliness and usability, with an eye on achieving high search engine rankings.</p>
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
                <Col className='about-me-who-we-are mission-vision-conten' sm={12} md={ {order:1} }>

                    <h3>What we do</h3>
                    <p> We work hard to get your business the most exposure and coverage possible by offering online marketing products that produce results.</p>
                 
                </Col>
            </Row>
        </Container>
    );
};

export default WhoweAre;