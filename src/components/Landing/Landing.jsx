import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Landing.css';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Resume.pdf';
  link.download = 'Resume.pdf';
  link.click();
};

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col className='welcome'>
          <h1>
            <span>Hey there!</span>
          </h1>
          <h2>
            My name is Stephanie, and I have over a decade of experience in
            education. I have built a dynamic career in leadership and program
            management, driven by my passion for continuous learning. My work
            spans collaborating with diverse stakeholders, leading school-wide
            initiatives, and organizing professional development events.
            <br /> <br />I have managed data-driven programs that promote
            improvement and track progress, and I am committed to continuous
            professional growth. Adaptable and results-oriented, I excel in
            leading teams and executing initiatives, always aiming to foster
            innovation, equity, and excellence in education.
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
};

export default Welcome;
