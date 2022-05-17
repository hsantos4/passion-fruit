import * as React from 'react';

import '../components/sass/layout/Homegrid.scss';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';

import { graphql, useStaticQuery} from 'gatsby'




const Homegrid = () => {

    const data = useStaticQuery(graphql`
    query homeGriddata {
        allCardDataJson {
          nodes {
            imgSrc
            text
            title
            jsonId
          }
        }
      }
      
    `)


    

    return (
        <Container fluid className='home-grid-container'>
            <div className='home-grid-heading'>
                <h3>A simple process</h3>
            </div>
            <Row className='gy-5' md={3} lg={3} >
               {data.allCardDataJson.nodes.map(node => {
                   return (
                       <Col sm={12}>
                           <Card key={node.jsonId} className='card-container'>
                               <Card.Img src={node.imgSrc} variant='top' />
                               <Card.Body>
                                   <Card.Title>{node.title}</Card.Title>
                                   <Card.Text>{node.text}</Card.Text>
                               </Card.Body>
                           </Card>
                       </Col>
                   )
               })}
            
            
            
                </Row>
        </Container>
       
    );
};


export default Homegrid;