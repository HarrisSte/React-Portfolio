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
          <h2>
            Hey there! My name is{' '}
            <span className='underline--magical'>Stephanie</span> and I am a{' '}
            <span className='underline--magical'>full-stack web developer</span>{' '}
            based in Raleigh, NC.
          </h2>
        </Col>
      </Row>
      <Row className='tech-skills'>
        <Col>
          <h1>Front-End Development</h1>
          <h3 className='bi bi-bookmark-check-fill'> HTML5</h3>
          <h3 className='bi bi-bookmark-check-fill'> CSS3</h3>
          <h3 className='bi bi-bookmark-check-fill'> JavaScript ES6+</h3>
          <h3 className='bi bi-bookmark-check-fill'> HandlebarsJS</h3>
          <h3 className='bi bi-bookmark-check-fill'> Bootstrap</h3>
          <h3 className='bi bi-bookmark-check-fill'> ReactJS</h3>
        </Col>
        <Col>
          <h1>Back-End Development</h1>
          <h3 className='bi bi-bookmark-check-fill'> NodeJS</h3>
          <h3 className='bi bi-bookmark-check-fill'> ExpressJS</h3>
          <h3 className='bi bi-bookmark-check-fill'> GraphQL</h3>
          <h3 className='bi bi-bookmark-check-fill'> MySQL & Sequelize</h3>
          <h3 className='bi bi-bookmark-check-fill'> MongoDB & Mongoose</h3>
        </Col>
        <Col>
          <button onClick={handleDownload} className='resume-button'>
            Download Cover Letter & Resume
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
