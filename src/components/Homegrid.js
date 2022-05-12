import * as React from 'react';

import '../components/sass/layout/Homegrid.scss';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';



const Homegrid = () => {
    return (
        <Container className='home-grid-container' fluid>

            <div className='home-grid-heading'>
                <h3>Our process is simple</h3>
            </div>
            <Row className='gy-3' md={3}  lg={3}>
                <Col sm={12}>
                    <Card className='card-container'>
                        <Card.Img src='https://ik.imagekit.io/hjsantos797/My_website_images/needs-min_hQ5zzJlSq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652180059171' variant='top' />
                        <Card.Body>
                            <Card.Title> Determine your agency's needs</Card.Title>
                            <Card.Text>
                                The best way to create amazing results is by knowing where you want 
                                your agency to be and the goals you have for it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card className='card-container'>
                        <Card.Img src='https://ik.imagekit.io/hjsantos797/My_website_images/develop-min_Ih7vRHjf9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652180058448' variant='top' />
                        <Card.Body>
                            <Card.Title>
                                Creating a strategy
                            </Card.Title>
                            <Card.Text>
                                With the goal of your agency at the center of everything we do, we will design and create a 
                                blue print that will get your agency closer to its goals.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card className='card-container'>
                        <Card.Img src='https://ik.imagekit.io/hjsantos797/My_website_images/progress-min_lDpLgiUnn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652180058974' variant='top' />
                        <Card.Body>
                            <Card.Title>Deploying the strategy</Card.Title>
                            <Card.Text>
                                Everything is live and we are getting your agency closer to reaching its goals, we do monthly 
                                revisits and make sure everything is running great. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Homegrid;