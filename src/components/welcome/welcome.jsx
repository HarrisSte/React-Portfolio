import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './welcome.css';

function handleDownload() {
  const alink = document.createElement('a');
  alink.href = '/SHarris_Resume.pdf';
  alink.download = 'SHarris_Resume.pdf';
  alink.click();
}

function Welcome() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            Hey there! My name is{' '}
            <span className='underline--magical'>Stephanie</span> and I am a{' '}
            <span className='underline--magical'>full-stack web developer</span>{' '}
            based in Raleigh, NC.
          </h2>
        </Col>
        {/* <Col>
          <h1>Stephanie Harris</h1>
          <p>Full-Stack Web Developer</p>
        </Col> */}
      </Row>
      <Row>
        <Col>
          <h1>Technologies & Proficiencies</h1>
          <p>Full-Stack Web Developer</p>
        </Col>
        <Col>
          <div>
            <button onClick={handleDownload} className='resume-button'>
              Download Resume
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import './welcome.css';

// function Welcome() {
//   return (
//     <Container>
//       <Row>
//         <Col sm={4}>
//           <h1>Stephanie Harris</h1>
//         </Col>
//         <Col sm={8}>
//           <h2>
//             Hey there! My name is Stephanie and I am a full-stack web developer
//             based in Raleigh, NC.
//           </h2>
//         </Col>
//       </Row>
//       <Row>
//         <Col sm={8}>
//           <p>Full-Stack Web <br></br>Developer</p>
//         </Col>
//         <Col sm={4}>sm=4</Col>
//       </Row>
//     </Container>
//   );
// }

// export default Welcome;
