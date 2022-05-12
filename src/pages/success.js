import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Container from 'react-bootstrap/Container'

import '../components/sass/page/success.scss'

const Success = () => {
    return (
        <Container fluid>
            <Helmet>
                <title>Passion Fruit Media Clt | Thank you!</title>
                <meta name="description" content="This is the success page after submitting out form" />
            </Helmet>

            <div className='success-content-wrapper'>
                <div className='success-content'>
                    <h3 >Thank you for Contacting us</h3>
                    <p>We will be in touch with you in just moment</p>
                    <Link className='success-link' to='/'>Take me back to the Homepage</Link>
                </div>
            </div>
            
        </Container>
    );
};

export default Success;