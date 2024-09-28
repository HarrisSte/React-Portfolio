import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <div className='gallery-wrap'>
            {Array.from({ length: 5 }, (_, index) => (
              <div className={`item item-${index + 1}`} key={index}></div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='about-info'>
          <h2>A LITTLE BIT ABOUT STEPHANIE...</h2>
          <p>
            With over a decade in education, I’ve built a varied and fulfilling
            career focused on leadership, program management, and a love for
            ongoing learning. My journey has allowed me to work with a wide
            range of students, colleagues, and stakeholders, creating spaces
            where growth, teamwork, and excellence thrive.
          </p>
          <p>
            Early on, I took on leadership roles aimed at aligning educational
            programs with state standards while working closely with different
            stakeholders. As a school leader and NSRF-Critical Friends
            facilitator, I helped connect educators with district officials,
            ensuring clear communication and steady progress towards our goals.
            I also enjoyed organizing big events that gave students valuable
            experiences beyond the classroom.
          </p>
          <p>
            A big part of my role has been managing programs with a focus on
            using data to drive results. I’m committed to using data insights to
            make informed decisions, track progress, and keep improving. This
            has helped me create and manage successful educational programs that
            make a real difference and stand the test of time.
          </p>
          <p>
            I’m all about professional growth and love learning new things.
            Whether I’m leading professional development for my colleagues,
            mentoring peers, or keeping up with the latest in education, I’m
            always looking to expand my skills and knowledge.
          </p>
          <p>
            I’m adaptable, solution-oriented, and excel at leading teams and
            managing key initiatives. My drive for results and ability to adjust
            as needed help me consistently achieve impactful outcomes for
            students and the wider educational community. I’m passionate about
            fostering environments where all learners can succeed and am
            dedicated to innovation, equity, and excellence in everything I do.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
