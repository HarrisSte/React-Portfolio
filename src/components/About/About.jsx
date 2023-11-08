import { Container, Row, Col } from 'react-bootstrap';
import aboutPhoto from '../../assets/AboutPhoto.jpg';

import './About.css';

function About() {
  return (
    <Container>
      <Row>
        <Col className='about-info'>
          Originally from Upstate New York, I graduated from SUNY Oswego in 2013
          with a dual bachelor's degree; one in Education and the other in
          Advanced Literature. I taught in South Carolina for ten years,
          eventually finding myself in North Carolina. <br></br>
          <br></br>I have always had a{' '}
          <span className='underline--magical'>
            {' '}
            passion for software development{' '}
          </span>{' '}
          and all that comes with the field - particularly reading documentation
          into the night. 🙃 I decided to complete a six-month full stack boot
          camp through UNC-Chapel Hill. As of August 2023, I earned my
          certificate and I am excited to shift my career path.<br></br>
          <br></br>
          My experiences have given me exceptional skills in{' '}
          <span className='underline--magical'> leadership</span>,
          <span className='underline--magical'> collaboration</span>, and
          <span className='underline--magical'> problem-solving</span>. I have a
          natural drive to organize, meet deadlines, and overcome challenges. It
          has always been so satisfying to fix a bug or have my work make others
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
            My time working within the field of education granted me
            opportunities to work with a variety of stakeholders & develop a
            strong skill set. These skills give me an upper hand when working on
            a team & gives me the discipline to continue my own personal growth.
            Because of this, I am consistently seeking information in order to
            better my craft.
          </p>
        </Col>
        <Col xs lg='3'>
          <h4>
            <ul>
              Planning &<br></br> Organization
            </ul>
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
            <ul>Life-long Learner</ul>
          </h4>
        </Col>
      </Row>
      <Row className='about-certs'>
        <Col md='auto'>
          <h4>
            <ul>
              Full-Stack Web <br></br>Development
            </ul>
            <ul>
              University of South <br></br>Carolina Coaching Teacher
            </ul>
            <ul>NSWF; Critical Friends Leadership</ul>
          </h4>
        </Col>
        <Col>
          <h1>My certifications</h1>
          <p>
            My certifications in leadership, coupled with web development, make
            me a strong candidate in a variety of roles. I have a strong ability
            to motivate myself & my teammates, as well as solve problems & make
            decisions effectively. I am versed in the latest technologies &
            tools that are present in today's industry. Being a highly adaptable
            individual, I am able to quickly learn new skills & pivot when
            necessary.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
