import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from "react-helmet"

import Container  from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from '../components/Form.js'

import '../components/sass/page/services.scss'
import '../components/sass/layout/grid-layout.scss'

const Services = () => {
    return(
        <div>
            <Helmet>
                <title>Passion Fruit Media Clt | Services</title>
                <meta name="description" content="See the services we offer your insurance agency to reach more people" />
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
                        Creat remarkable digital products for insurance agencies. We want to see your agency grow so
                        we put our heart into deploying the very best products that will deliver those results.
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
                    <p>We Design and Develop websites. Our websites are optimized for search engines and created to reach the right audience. 
                        Creating modern and simple websites that are easy to navigate.
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
                    <p>With Website support we make sure that your website is up-to-date and running properly. You no longer have to spend hours trying update and fix website issues.</p>
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
                    <p>Optimizing your insurance website so your at the top is our goal, we conduct research for popular terms that people are searching for and we implement them on your website.</p>
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
                    <p>Every person buying insurance starts online, we offer services to get your agency in front of potential clients shopping online. </p>
                </Col>
            </Row>

            
        </Container>


        <Form />
                
        </div>
    );
};

export default Services;