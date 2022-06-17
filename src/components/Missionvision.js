import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import  Container  from 'react-bootstrap/Container';

import './sass/layout/grid-layout.scss'


const Missionvision = () => {
    return (
        <Container fluid="sm"> 
            <Row className='grid-row align-items-center' md={2} lg={2}>
                <Col sm={12}>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/mission-min_gMIDaFi5g.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651010910538'
                    alt=''
                    className='img-fluid'
                    />
                </Col>
                <Col className='text-center mission-vision-content' sm={12}>
                    <h3>Our Msison</h3>
                    <p> Our goal is to help you reach your professional goals and bring value to your business. On a mission to provide professional design and development services that help company grow.</p>
                     <p>By leveraging technology, we can deliver quality work on time and within budget, allowing you to focus on what matters most: serving your clients and helping them succeed.</p>
                </Col>
            </Row>

            
            <Row className='grid-row align-items-center' md={2} lg={2}>
                <Col sm={12} md={ {order:2} }>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/mission-about-min_KtdrvBFGM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650331495818'
                    alt=''
                    className='img-fluid'

                    />
                </Col>
                <Col className='text-center mission-vision-content' sm={12} md={ {order:1} }>
                    <h3>Our Vison</h3>
                    <p> The end goal is to meet every Digital need your business may have and fulfill every need to the best of our ability.</p> 
                    <p>We are committed to helping your company and will use our knowledge and skills to make that happen. </p>
                    <p> With a range of flexible packages, you can be sure that we have an option that suits your business and personal needs.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Missionvision;