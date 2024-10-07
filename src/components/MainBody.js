import React from 'react';
import { Container } from 'react-bootstrap';
import Gallery from './Gallery/Gallery';
import './MainBody.css';



function MainBody() {
  return (
    <div className='main-body'>
      <Container>
        <Gallery/>
      </Container>
    </div>
  )
}

export default MainBody