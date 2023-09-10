// Importing necessary files for the Resume section.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Resume/Resume.css';

//Allows resume to be downloaded on user click.
function handleDownload() {
  const link = document.createElement('a');
  link.href = '../../../public/SHarris_Resume.pdf';
  link.download = 'SHarris_Resume.pdf';
  link.click();
}

function Resume() {
  return (
    <Container>
      <Row>
        <Col>
          <div className='subtitle'>
            <h1>Resume & Proficiencies</h1>
            <div className='resume-button'>
              <button onClick={handleDownload}>Download Resume</button>
            </div>
          </div>
        </Col>
        <Col>
          <div className='front-end'>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Responsive design</li>
              <li>React</li>
              <li>React Bootstrap</li>
            </ul>
          </div>
          <div className='back-end'>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL and Sequelize</li>
              <li>MongoDB and Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </Col>
       
       
       
        <Col>
          <div className='back-end'>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL and Sequelize</li>
              <li>MongoDB and Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;