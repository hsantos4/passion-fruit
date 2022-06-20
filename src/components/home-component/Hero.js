import * as React from 'react';

import { Link } from 'gatsby';


import '../sass/layout/hero.scss';

const Hero = () => {
    return (
        <div className='hero'>


            <div className='hero-content'>
            <h1>Web Design and <br/> Digital Marketing</h1>
            <h2>for your Insurance agency</h2>
            <p> Helping your Agency become recognized online and grow their revenue by effectively reaching the right audience.</p>
            <Link to='/services' className='hero-cta'>Learn more</Link>
            </div>
        </div>
    )
}

export default Hero;