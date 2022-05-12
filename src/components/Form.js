import * as React from 'react';

import Container from 'react-bootstrap/Container'
import  Form  from 'react-bootstrap/Form';

import '../components/sass/component/form.scss';


const submitForm = () => {
   
    return (
        
            <Container className='form-container-wrapper' fluid>

                <div className='form-heading'>
                   
                        <h3>Tell me more about your project</h3>
                        <p>It's <b>FREE</b> to see how we can help your agency reach the top!</p>
                </div>

                <Form  className='form-container m-auto' name='contact-form' action='https://formspree.io/f/xjvljbdq' method='post'>

                    {/* Service option */}
                        <Form.Label>What service are you interested in?</Form.Label>
                    <Form.Select className='form-group'  aria-label="Services we offer" required >
                        <option></option>
                        <option value="1">Website Design & Development</option>
                        <option value="2">Website Redesign</option>
                        <option value="3">Google Ads</option>
                        <option value="4">Search Engine Optimization</option>
                    </Form.Select>
                    
                    {/* Pricing options */}
                        <Form.Label>What are your budget expectations for this project?</Form.Label>
                    <Form.Select className='form-group'  aria-label="Price range?" required>
                        <option></option>
                        <option value="1">$1,000 - $5,000</option>
                        <option value="2">$6,000 - $12,000</option>
                        <option value="3">$14,000 - $20,000</option>
                        <option value="4">Lets talk about it</option>
                    </Form.Select>

                        <Form.Label>When do you need this project completed?</Form.Label>
                    <Form.Select className='form-group'  aria-label="Price range?" required>
                        <option></option>
                        <option value="1">Less than a month</option>
                        <option value="2">1 - 4 months</option>
                        <option value="3">6 - 12 months</option>
                        <option value="4">Lets talk about it</option>
                    </Form.Select>

                    <Form.Group controlId='message' className='form-group'>
                        <Form.Label>What prompted you to start this project?</Form.Label>
                        <Form.Control as='textarea' name='message' required></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='message' className='form-group'>
                        <Form.Label>What business goals are you trying to achieve with this project?</Form.Label>
                        <Form.Control as='textarea' name='message' required></Form.Control>
                    </Form.Group>
               
                    <Form.Group controlId='name' className='form-group'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control  type='text' name='fullName' placeholder='First and Last Name' required/>
                    </Form.Group>
                    <Form.Group controlId='business-name' className='form-group'>
                        <Form.Label>Agency Name</Form.Label>
                        <Form.Control type='text' name='businessName' placeholder='Agency Name' required/>
                    </Form.Group>
                    <Form.Group controlId='email' className='form-group'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' name='businessEmail' placeholder='email@email.com' required />
                    </Form.Group>
                    <Form.Group controlId='phone-number' className='form-group'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type='tel' name='businessNumber' placeholder='(xxx)-xxx-xxxx' required />
                    </Form.Group>
            
                        <button className='form-cta'>Submit</button>
                </Form>
            </Container>
    );
};

export default submitForm;