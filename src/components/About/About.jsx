import { Container, Row, Col } from 'react-bootstrap';
import aboutPhoto from '../../assets/AboutPhoto.jpg';

import './About.css';

function About() {
  return (
    <Container>
      <Row>
        <Col className='about-info'>
          Originally from Upstate New York, I graduated from the SUNY Oswego in
          2013 with a dual Bachelors degree; one in Education and the other in
          Advanced Literature. I taught in South Carolina for the span of ten
          years, eventually finding myself in North Carolina. <br></br>
          <br></br>I have always had a{' '}
          <span className='underline--magical'>
            {' '}
            passion for web developement{' '}
          </span>{' '}
          and all that comes with the field - particularily reading
          documentation into the night. 🙃 I decided to complete a six-month
          full stack bootcamp through UNC - Chapel Hill. As of August 2023, I
          earned my certificate and I am eager to continue growing.<br></br>
          <br></br>
          My experiences have given me exceptional skills in{' '}
          <span className='underline--magical'> leadership</span>,
          <span className='underline--magical'> collaboration</span>, and
          <span className='underline--magical'> problem-solving</span>. I have a
          natural drive to organize, meet deadlines, and overcome challenges. It
          has always so satisfying to fix a bug or have my work make others
          happy.
        </Col>
        <Col>
          <img
            src={aboutPhoto}
            alt='Picture of Stephanie'
            className='profile-image'
          />
        </Col>
      </Row>
      <Row className='about-skills'>
        <Col>
          <h1>My career, so far...</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            harum blanditiis illo ducimus, veniam aliquam porro ut asperiores
            corporis sint aliquid magnam mollitia, molestiae perspiciatis
            dolorem eligendi facilis temporibus pariatur!
          </p>
        </Col>
        <Col md='auto'>
          <h4>
            <ul>Planning & Organization</ul>
            <ul>Communication</ul>
            <ul>Problem-solving</ul>
            <ul>Adaptability</ul>
            <ul>Patience</ul>
          </h4>
        </Col>
        <Col xs lg='2'>
          <h4>
            <ul>Teamwork</ul>
            <ul>Leadership</ul>
            <ul>Creativity</ul>
          </h4>
        </Col>
      </Row>
      <Row className='about-certs'>
        <Col xs lg='2'>
          <h4>
            <ul>Teamwork</ul>
            <ul>Leadership</ul>
            <ul>Creativity</ul>
          </h4>
        </Col>
        <Col md='auto'>
          <h4>
            <ul>Communication</ul>
            <ul>Problem-solving</ul>
            <ul>Adaptability</ul>
            <ul>Patience</ul>
          </h4>
        </Col>
        <Col>
          <h1>My certifications</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            harum blanditiis illo ducimus, veniam aliquam porro ut asperiores
            corporis sint aliquid magnam mollitia, molestiae perspiciatis
            dolorem eligendi facilis temporibus pariatur!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
