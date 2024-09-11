import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='gallery-wrap'>
              <div className='item item-1'></div>
              <div className='item item-2'></div>
              <div className='item item-3'></div>
              <div className='item item-4'></div>
              <div className='item item-5'></div>
          
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='about-info'>
            <div>
              <h2>A LITTLE BIT ABOUT STEPHANIE...</h2>
            </div>
            <div>
              With over a decade in education, I’ve built a varied and
              fulfilling career focused on leadership, program management, and a
              love for ongoing learning. My journey has allowed me to work with
              a wide range of students, colleagues, and stakeholders, creating
              spaces where growth, teamwork, and excellence thrive.<br></br>
              <br></br> Early on, I took on leadership roles aimed at aligning
              educational programs with state standards while working closely
              with different stakeholders. As a school leader and NSRF-Critical
              Friends facilitator, I helped connect educators with district
              officials, ensuring clear communication and steady progress
              towards our goals. I also enjoyed organizing big events that gave
              students valuable experiences beyond the classroom. <br></br>
              <br></br>A big part of my role has been managing programs with a
              focus on using data to drive results. I’m committed to using data
              insights to make informed decisions, track progress, and keep
              improving. This has helped me create and manage successful
              educational programs that make a real difference and stand the
              test of time. <br></br>
              <br></br>I’m all about professional growth and love learning new
              things. Whether I’m leading professional development for my
              colleagues, mentoring peers, or keeping up with the latest in
              education, I’m always looking to expand my skills and knowledge.{' '}
              <br></br>
              <br></br>I’m adaptable, solution-oriented, and excel at leading
              teams and managing key initiatives. My drive for results and
              ability to adjust as needed help me consistently achieve impactful
              outcomes for students and the wider educational community. I’m
              passionate about fostering environments where all learners can
              succeed and am dedicated to innovation, equity, and excellence in
              everything I do.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
