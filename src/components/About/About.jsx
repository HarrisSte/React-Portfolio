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
          <br></br>I have always had a passion for web developement and all that comes with the field - particularily reading documentation into the night. I decided to complete a six-month full stack bootcamp
          through UNC - Chapel Hill. <br></br>
          <br></br>
          My experiences have given me exceptional skills in{' '}
          <span className='underline--magical'> leadership</span>,
          <span className='underline--magical'> collaboration</span>, and
          <span className='underline--magical'> problem-solving</span>. I have a natural drive to organize, meet deadlines, and overcome challenges. It has always so satisfying to fix a bug or have my work make others happy.
        </Col>
        <Col>
          <img
            src={aboutPhoto}
            alt='Picture of Stephanie'
            className='profile-image'
          />
        </Col>
      </Row>

      <Row></Row>
    </Container>
  );
}

export default About;

// Importing necessary files for the Resume section.
// import {Container, Row, Col} from 'react-bootstrap';
// import aboutPhoto from '../../assets/AboutPhoto.jpg';
// import './About.css';

// function About() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//
//         </Col>
//         <Col>
//           <div className='about-info'>
//             Over the past ten years, my heart and soul have been dedicated to
//             shaping young minds in middle school education. It has been an
//             incredible journey, witnessing the growth and progress of my
//             students, and knowing I have made a difference in their lives.
//             <br></br>
//             <br></br>
//             However, life had a fascinating twist for me, leading me to explore
//             my passion for web development. Embracing the unknown, I decided to
//             pursue this new frontier and immerse myself in coding, design, and
//             technology.
//             <br></br>
//             <br></br>
//             The transition was challenging, but my decade of experience in
//             education taught me the value of perseverance and hard work. I
//             dove into online courses, coding boot camps, and self-guided
//             projects, constantly seeking to improve my skills and understanding.
//             <br></br>
//             <br></br>
//             As I move forward, I am eager to continue making a positive impact
//             and embracing new adventures in education and technology.
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default About;
