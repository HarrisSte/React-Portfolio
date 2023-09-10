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
            <p>
              I am continuously pushing myself to learn and grow. <br></br>Need
              a certain language or framework? <br></br>Let me know so I can add
              it to my skillset!
            </p>
            <div className='resume-button'>
              <button onClick={handleDownload}>Download Resume</button>
            </div>
          </div>
        </Col>
        <Col>
          <div className='tech-skills'>
            <ul>
              <li>JavaScript ES6+</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>jQuery</li>
              <li>GitHub</li>
              <li>MongoDB and Mongoose</li>
              <li>MySQL and Sequelize</li>
              <li>Responsive design</li>
              <li>React</li>
              <li>React Bootstrap</li>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>REST</li>
              <li>GraphQL</li>
              <li>Handlebars</li>
            </ul>
          </div>
          <div className='back-end'>
            <ul></ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
