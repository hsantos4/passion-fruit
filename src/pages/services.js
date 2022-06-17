import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from "react-helmet";

import Container  from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from '../components/Form.js';

import '../components/sass/page/services.scss';
import '../components/sass/layout/grid-layout.scss';

const Services = () => {
    return(
        <div>
            <Helmet>
                <title>Passion Fruit Media Clt | Services</title>
                <meta name="description" content="See the services we offer your business to reach more people" />
            </Helmet>

        <div className='services-banner '>
            <h3>
            Services
            </h3>
        </div>

        <div className='services-intro-container'>
            <Card className='services-intro'>
                <Card.Body>
                    <Card.Title>
                        What we do
                    </Card.Title>
                    <Card.Text>
                    We are a digital product company that specializes in creating remarkable digital products for business. We want to see your company grow so we put our heart into deploying the very best solutions that will deliver those results.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>


            {/*This is explaing the web development service  */}
            <Container fluid="sm"> 
            <Row className='grid-row align-items-center' md={2} lg={2}>
                <Col sm={12} md={{order:2}}>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/development-services-min_eOlryUj3l.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650331497401'
                    alt='Web development image' 
                    className='services-img img-fluid'
                    />
                    
                </Col>
                <Col className='col-text' sm={12} md={{order:1}}>
                    <h2>Web Design & Development</h2>
                    <p>We create stunning designs that convert visitors into customers. Our websites are easy to navigate, user-friendly and optimized to reach the right users.
                    </p>
                </Col>
            </Row>

            
            <Row className='grid-row align-items-center' md={2} lg={2}>
                <Col sm={12} md={ {order:1} }>
                    <StaticImage
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/hosting-services-min_UKdqY6i-vH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650331502721'
                    alt='Hosting and maintance services'
                    className='services-img img-fluid'
                    />
                </Col>
                <Col className='col-text' sm={12} md={ {order:2} }>
                    <h3>Maintenance & Hosting</h3>
                    <p> We Provide Website support to ensure that your website is working properly and up-to-date. Our Web development team makes sure that your website is fully functional and compatible with different browsers, devices and platforms.</p>
                </Col>
            </Row>

            <Row className='grid-row align-items-center' md={2} lg={2}>
                <Col sm={12} md={ {order:2} }>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/seo-img-min_m8Kl5--Ph.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651172632871'
                    alt='Image for Seo'
                    className='services-img img-fluid'
                    />
                </Col>
                <Col className='col-text' sm={12} md={ {order:1} }>
                    <h3>SEO</h3>
                    <p> Your website needs to be optimized in order to get found on the internet, web design and web development is what we do. We conduct research for popular terms that people are searching for and we implement those terms into your website so you can rank higher in the search engines and drive more traffic. </p>
                </Col>
            </Row>
            <Row className='grid-row align-items-center' md={2} lg={2}>
                <Col  sm={12} md={ {order:1} }>
                <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/servic-marketing_zAe45KzNj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651173155654'
                    alt='Image for digital marketing'
                    className='services-img img-fluid'
                    />
                </Col>
                <Col className='col-text' sm={12} md={ {order:2} }>
                    <h3>Search Engine Marketing</h3>
<<<<<<< HEAD
                    <p>Online advertising makes it easier for people to find your insurance agency. We provide Google Ad services to help you get in front of potential clients shopping online in just a few steps. </p>
=======
                    <p>Online search engine marketing makes it easier for people to find your business. We provide services to help you get in front of potential clients shopping online in just a few steps. </p>
>>>>>>> Experimental
                </Col>
            </Row>

            
        </Container>


        <Form />
                
        </div>
    );
};

export default Services;