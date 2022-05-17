import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';
import  Container  from 'react-bootstrap/Container';

import './sass/layout/home-vision.scss'

const Homevision = () => {
    return (
        <Container className='fluid '> 
            <Row className='home-vision align-items-center' md={2}  lg={2}>
                <Col  md={{order : 2}} sm={12}>
                    <StaticImage src='https://ik.imagekit.io/hjsantos797/My_website_images/the-standard-min_Xufl4AfBv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650331499418' className='img-fluid' alt=''/>
                </Col>

                <Col className='text-center home-vision-content mt-2' md={{ order: 1 }} sm={12}>
                    <h3 >A Solution that finally works!</h3>
                    <p >
                    We understand insurance agencies have needs and we know what clients are looking for, we offer a strategy that can help your agency reach its goals. 
                    </p>

                </Col>
            </Row>
        </Container>
    );
};

export default Homevision;