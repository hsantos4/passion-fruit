import * as React from 'react';
import { Link } from 'gatsby';

import '../sass/layout/hero-banner.scss';

const Herobanner = () => {
    return (
        <div className='hero-banner'>
        <h3>
          See how we can help your Insurance Agency reach its goals
        </h3>
        <Link className='home-mid-cta hero-cta' to='/contact'>Learn more</Link>
      </div>
    );
};

export default Herobanner;