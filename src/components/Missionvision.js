import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import  Container  from 'react-bootstrap/Container';


const Missionvision = () => {
    return (
        <Container className='mission-vision p-4' fluid="sm"> 
            <Row className='align-items-center' md={2} lg={2}>
                <Col sm={12}>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/mission-min_gMIDaFi5g.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651010910538'
                    alt=''
                    className='img-fluid'
                    />
                </Col>
                <Col className='about-me-who-we-are' sm={12}>
                    <h3>Our Msison</h3>
                    <p>To see your agency grow and to help you reach your goals faster.</p>
                    <p>Seeing agencies grow is and will always been our mission, and it won't stop.</p>
                    <p>Driven by hard work and dedication to see results is why we do this.</p>
                </Col>
            </Row>

            
            <Row className='align-items-center' md={2} lg={2}>
                <Col sm={12} md={ {order:2} }>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/mission-about-min_KtdrvBFGM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650331495818'
                    alt=''
                    className='img-fluid'

                    />
                </Col>
                <Col className='about-me-who-we-are' sm={12} md={ {order:1} }>
                    <h3>Our Vison</h3>
                    <p>To meet every Digital need your agency may have and fulfill every need to the best of our ability.</p>
                    <p>We are committed to helping your agency and will use are knowledge and skills to make that happen.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Missionvision;