import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';


import './sass/component/footer.scss';

const Footer = () => {
   
    return(
            

<footer className='main-footer'>
    <Container fluid >
                <Row className='mb-0' md={3} lg={3} >
    
                    <Col className='footer-content justify-content-center'  sm={12}>
    
                    <StaticImage src='https://ik.imagekit.io/hjsantos797/My_website_images/my-logo_h5Ri6Wlgb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650579969500' 
                    alt='This is my logo'
                    className='img-fluid logo'
                        />
                    
    
                        <div className='footer-content-main'>
                            <p>
                                I am Web developer and Digital marketer
                                that gets your insurance agency know by user-friendly web design
                                and optimized digital marketing
                            </p>
                        </div>
    
                    </Col>
    
                    <Col className='footer-col footer-site-nav' sm={12} >
                        <h3>Quick Links</h3>
                            <ul className='footer-col-items'>
                                <li className='footer-col-item '>
                                    <Link className='footer-col-links' to='/'>Home</Link>
                                </li>
                                <li className='footer-col-item'>
                                    <Link className='footer-col-links' to='/about'>About</Link>
                                </li>
                                <li className='footer-col-item'>
                                    <Link className='footer-col-links' to='/services'>Services</Link>
                                </li>
                                <li className='footer-col-item'>
                                    <Link className='footer-col-links' to='/contact'>Contact</Link>
                                </li>
                            </ul>
                    </Col>
    
                    <Col className='footer-col footer-contact-info' sm={12} >
                    <h3>Contact us</h3>
                            <ul className='footer-col-items'>
                                <li className='footer-col-item'>
                                    <a href='https://www.google.com/search?client=firefox-b-1-d&sxsrf=ALiCzsa4T8ajYDRC9-WQwDkpmm0hVfugfA:1652375350770&q=Passion+Fruit+Media+Clt.&si=AC1wQDAjJ8oRvNXHnN4UeD0TNg1RI9jH_YrDo7Xn4YuANY1GXAUeFptNL_LP1yiX50VlYDZZOOX4kph6o5F8PgbqbVmtWmj1ORf1Z-_JiCdsQTmwgiWwJvaDxKF_QbclOZcBmNZngBQU68bl1LyjQV4iMm1IxPUcWep-qo7QG_3fg85Kvi2EismIA-SDMk_eut22i_lgcznJgOH4QeESTBdfRho3YH7QpClqby55Re1swRjQg_PWyzA%3D&sa=X&ved=2ahUKEwiUyMXuudr3AhXZQjABHUVxBqkQ6RN6BAgpEAE&biw=1440&bih=815&dpr=2' target="_blank" className='footer-col-links'>Google business</a>
                                </li>
                                <li className='footer-col-item'>
                                    <a href='mailto:admin@passionfruitclt.com' className='footer-col-links' >info@passionfruitmediaclt.com</a>
                                </li>
    
                            </ul>
                    </Col>
                </Row>
    
    
               <div className='underline'></div>
    
            <div className='footer-legal d-md-flex justify-content-md-between'>
    
                    <div className='footer-copy'>
                           <div>
                           <p>&copy; {new Date().getFullYear()} All right reserved</p>
                           </div>
    
                    </div>
    
                    <div className='footer-terms'>
    
                            <div className='footer-terms'>
                                <Link to='/privacy'>Policy Privacy</Link>
                            </div>
                        </div>
    </div>
    
            </Container>
</footer>
    
    );
};

export default Footer;