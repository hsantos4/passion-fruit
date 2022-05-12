import * as React from 'react';

import { Link } from 'gatsby';


import '../sass/layout/hero.scss';

const Hero = () => {
    return (
        <div className='hero'>


            <div className='hero-content'>
            <h1>Web Design and <br/> Digital Marketing</h1>
            <h2>for Insurance Agencies</h2>
            <p> Helping insurance agencies reach the online audience.</p>
            <Link to='/services' className='hero-cta'>Learn more</Link>
            </div>
        </div>
    )
}

export default Hero;