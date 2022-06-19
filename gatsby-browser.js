import * as React from 'react';
import './src/components/sass/base/reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './src/components/Layout.js';

// export const onRouteUpdate = ({ location }) => {
//     if (process.env.NODE_ENV !== 'production') {
//       return null;
//     }
  
//     const pagePath = location ? location.pathname + location.search + location.hash : undefined;
//     setTimeout(() => {
//       if (typeof gtag === 'function') {
//         gtag('event', 'page_view', { page_path: pagePath });
//       }
//     }, 100);
//   };

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}