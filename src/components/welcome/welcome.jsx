import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './welcome.css';

function handleDownload() {
  const link = document.createElement('a');
  link.href = '/SHarris_Resume.pdf';
  link.download = 'SHarris_Resume.pdf';
  link.click();
}

function Welcome() {
  return (
    <Container>
      <Row>
        <Col className='welcome'>
        <h1>Hey there!</h1>
          <h2>
            My name is{' '}
            <span className='underline--magical'>Stephanie</span> and I’ve spent
            over ten years designing & managing effective learning programs and
            am passionate about creating engaging digital experiences. I’ve led
            curriculum projects and used data to make sure teaching is
            impactful. I love using tech to help people learn and grow.
          </h2>
        </Col>
      </Row>

      <Row className='resume-btn'>
        <Col>
          <a href='#' onClick={handleDownload} className='btn'>
            <span className='btn__circle'></span>
            <span className='btn__white-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                id='icon-arrow-right'
                viewBox='0 0 21 12'
              >
                <path d='M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z'></path>
              </svg>
            </span>
            <span className='btn__text'>Download Resume</span>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
