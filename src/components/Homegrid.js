import * as React from 'react';

import '../components/sass/layout/Homegrid.scss';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';





const Homegrid = () => {
    const homeGridinfo =

    [
        {
            id: 1,
            imgSrc: "https://ik.imagekit.io/hjsantos797/My_website_images/needs-min_hQ5zzJlSq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652180059171", 
            title: "Determine your agency's needs",
            text: " The best way to create amazing results is by knowing where you want your agency to be, who you want to serve, and the goals you have for it."
        },
        {
            id: 2,
            imgSrc: "https://ik.imagekit.io/hjsantos797/My_website_images/develop-min_Ih7vRHjf9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=16521800584481", 
            title: "Creating a strategy",
            text: " We will design and create a blue print that will get your agency closer to its goals. With the goal of your agency at the center of everything we do, we will be sure your needs are met and strategic plans are set on course for success." 
        },
        {
            id: 3,
            imgSrc: "https://ik.imagekit.io/hjsantos797/My_website_images/progress-min_lDpLgiUnn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652180058974", 
            title: "Deploying the strategy",
            text: " We offer support and advice to help you get your agency on the right track for success. We will review your platform and make any adjustments needed. " 
        }
    ];


    

    return (
        <Container fluid className='home-grid-container' >

            <div className='home-grid-heading'>
                <h3>Our process is simple</h3>
            </div>

            <Row className='gy-3' md={3}  lg={3}>

            {homeGridinfo.map((item) => {
                        <Col sm={12} key={item.id}>
                            <Card className='card-container'>
                                <Card.img src={item.imgSrc} variant='top' className='img-fluid'/>

                                <Card.Body>
                                    <Card.title>{item.title}</Card.title>
                                    <Card.text>{item.text}</Card.text>
                                </Card.Body>
                                
                            </Card>
                        </Col>

                    )})}
                    
            </Row>
        </Container>
    );
};


export default Homegrid;