import * as React from 'react';
import { Helmet } from "react-helmet";

import Form from '../components/Form.js';

import '../components/sass/page/contact.scss';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Passion Fruit Media Clt | Contact us</title>
                <meta name="description" content="Contact us to see how we can help your company reach the online audience" />
            </Helmet>
            
            <div className='contact-banner '>
                <h3>
                Contact us
                </h3>
            </div>

                <Form ></Form>
        </div>
    );
};

export default Contact;