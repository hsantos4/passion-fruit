import * as React from 'react';
import './src/components/sass/base/reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './src/components/Layout.js';

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}