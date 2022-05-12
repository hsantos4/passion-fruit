import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useState } from 'react';
import './sass/component/nav.scss'



const Nav = () => {
    // This usestate will make the mobile menu drop down
    const [nav, showNav] = useState(false)

    let mobileMenu;

    if (nav) {
        mobileMenu =  
    <div class="mobile-menu">
        <ul  className='mobile-items'>
            <li className='mobile-item'>
                <Link to='/' className='mobile-link' >Home</Link>
            </li>
            <li className='mobile-item'>
                <Link to='/about' className='mobile-link' >About</Link>
            </li>
            <li className='mobile-item'>
                <Link to='/services' className='mobile-link' >Services</Link>
            </li>
            <li className='mobile-item'>
                <Link to='/contact' className='mobile-link' >Contact</Link>
            </li>
        </ul>
    </div>
    }

    return(
        <header className='nav-header'>
            <nav className='nav'>
                
    
                <div className='logo-container'>
        
                    <Link to='/'>
                        <StaticImage className='logo' src='https://ik.imagekit.io/hjsantos797/My_website_images/my-logo_h5Ri6Wlgb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650579969500'  alt='This is the logo'/>
                    </Link>
                </div>




                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => showNav(!nav)} className='bi bi-list mobile-btn' width="40" height="40"   viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
        
                    <ul className='nav-items hidden'>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link' >Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" className='nav-link' >About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/services" className='nav-link' >Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className='nav-link' >Contact</Link>
                        </li>
                    </ul>
            

            </nav>

           {mobileMenu}

           
        </header>
        
    );
};

export default Nav;