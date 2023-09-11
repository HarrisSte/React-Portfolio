// Importing necessary files for the Resume section.
import {Container, Row, Col} from 'react-bootstrap';
import aboutPhoto from '../../assets/AboutPhoto.jpg';
import './About.css';

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <div className='about'>
            <h1>A little about Stephanie</h1>
            <img
              src={aboutPhoto}
              alt='Picture of Stephanie'
              className='profile-image'
            />
          </div>
        </Col>
        <Col>
          <div className='about-info'>
            Over the past ten years, my heart and soul have been dedicated to
            shaping young minds in middle school education. It has been an
            incredible journey, witnessing the growth and progress of my
            students, and knowing I have made a difference in their lives.
            <br></br>
            <br></br>
            However, life had a fascinating twist for me, leading me to explore
            my passion for web development. Embracing the unknown, I decided to
            pursue this new frontier and immerse myself in coding, design, and
            technology.
            <br></br>
            <br></br>
            The transition was challenging, but my decade of experience in
            education taught me the value of perseverance and hard work. I
            dove into online courses, coding boot camps, and self-guided
            projects, constantly seeking to improve my skills and understanding.
            <br></br>
            <br></br>
            As I move forward, I am eager to continue making a positive impact
            and embracing new adventures in education and technology.
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
