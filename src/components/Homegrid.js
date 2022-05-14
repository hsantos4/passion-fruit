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
            imgSrc: "https://ik.imagekit.io/hjsantos797/My_website_images/needs-min_hQ5zzJlSq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652180059171", 
            title: "Determine your agency's needs",
            text: "The best way to create amazing results is by knowing where you want your agency to be and the goals you have for it."
        },
        {
            imgSrc: "https://ik.imagekit.io/hjsantos797/My_website_images/develop-min_Ih7vRHjf9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=16521800584481", 
            title: "Creating a strategy",
            text: "With the goal of your agency at the center of everything we do, we will design and create a blue print that will get your agency closer to its goals." 
        },
        {
            imgSrc: "https://ik.imagekit.io/hjsantos797/My_website_images/progress-min_lDpLgiUnn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652180058974", 
            title: "Deploying the strategy",
            text: "Everything is live and we are getting your agency closer to reaching its goals, we do monthly revisits and make sure everything is running great. " 
        }
        

    ];

    return (
        <Container fluid className='home-grid-container' >
            <div className='home-grid-heading'>
                <h3>Our process is simple</h3>
            </div>
            <Row className='gy-3' md={3}  lg={3}>
                {homeGridinfo.map((item) => {
                    return (
                        <Col sm={12} key={homeGridinfo.title}>
                            <Card className='card-container'>
                                <Card.img src={homeGridinfo.imgSrc} variant='top' className='img-fluid'/>
                                <Card.title>{homeGridinfo.title}</Card.title>
                                <Card.text>{homeGridinfo.text}</Card.text>
                                
                            </Card>
                        </Col>

                    )})}
               
            </Row>
        </Container>
    );
};

export default Homegrid;