import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from "react-helmet"

import Container  from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from '../components/Form.js'

import '../components/sass/page/services.scss'

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
                        We speacialize in creating remarkable digital products for insurance angecies. With the goal of seeing your agency grow
                        we put our heart into deploying the very best products that will deliver the best results.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>


            {/*This is explaing the web development service  */}
            <Container fluid="sm"> 
            <Row className='align-items-center gx-5' md={2} lg={2}>
                <Col sm={12} md={{order:2}}>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/development-services-min_eOlryUj3l.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650331497401'
                    alt='Web development image' 
                    className='services-img img-fluid'
                    />
                    
                </Col>
                <Col className='col-text' sm={12} md={{order:1}}>
                    <h2>Web Design & Development</h2>
                    <p>We Design and Develop websites, our websites are optimized for search engines and created to produce results. 
                        Creating modern and clean websites that are easy for potential clients to navigate and turn into clients.
                    </p>
                </Col>
            </Row>

            
            <Row className='align-items-center' md={2} lg={2}>
                <Col sm={12} md={ {order:1} }>
                    <StaticImage
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/hosting-services-min_UKdqY6i-vH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650331502721'
                    alt='Hosting and maintance services'
                    className='services-img img-fluid'
                    />
                </Col>
                <Col className='col-text' sm={12} md={ {order:2} }>
                    <h3>Maintance & Hosting</h3>
                    <p>With monthly website check ins, we make sure that your website is up-to-date, you no longer have to worry about updating your website. We also take charge of finding your website a home.</p>
                </Col>
            </Row>

            <Row className='align-items-center' md={2} lg={2}>
                <Col sm={12} md={ {order:2} }>
                    <StaticImage 
                    src='https://ik.imagekit.io/hjsantos797/My_website_images/seo-img-min_m8Kl5--Ph.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651172632871'
                    alt='Image for Seo'
                    className='services-img img-fluid'
                    />
                </Col>
                <Col className='col-text' sm={12} md={ {order:1} }>
                    <h3>SEO</h3>
                    <p>Optimizing your website so your insurnace website can be at the top of any other insurance agency is our goal, we conduct research for popular terms and we implement them on your website. We take care of all the technical stuff so your can focusing on your agency.</p>
                </Col>
            </Row>
            <Row className='align-items-center' md={2} lg={2}>
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