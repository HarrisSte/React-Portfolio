// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Welcome.css';

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
          <h1>
            <span className='underline--magical'>Hey there!</span>
          </h1>
          <h2>
            My name is Stephanie and I have over a decade in education; I have
            built a dynamic career in leadership and program management, driven
            by my passion for continuous learning. My work spans collaborating
            with diverse stakeholders, leading school-wide initiatives, and
            organizing professional development events. <br></br> <br></br> I have managed
            data-driven programs that drive improvement and track progress, and
            I am dedicated to ongoing professional growth. Adaptable and
            results-oriented, I excel in leading teams and executing
            initiatives, always aiming to foster innovation, equity, and
            excellence in education.
          </h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className='resume-container'>
            <button className='learn-more' onClick={handleDownload}>
              <span className='circle' aria-hidden='true'>
                <span className='icon arrow'></span>
              </span>
              <span className='button-text'>Download Resume</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
