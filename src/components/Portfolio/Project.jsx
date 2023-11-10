import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import ZooImg from '../../assets/Project1SS.jpg';
import DiscDevs from '../../assets/DiscDevs.jpg';
import JATE from '../../assets/JATE.jpg';
import NoteTaker from '../../assets/notetaker.jpg';
import CodeQuiz from '../../assets/codingquiz.jpg';
import PwGen from '../../assets/PWGen.jpg';
import SingleGame from '../../assets/SingleGame.jpg';
import Regex from '../../assets/regex.jpg';
import kitchWitch from '../../assets/theKitchWitch.jpg';
import jennsCupcakes from '../../assets/logo.png';

import '../Portfolio/Portfolio.css';

const projects = [
  {
    img: ZooImg,
    title: 'Zooquarium',
    description: 'Search for  local accredited zoos & their animals!',
    deployedURL: 'https://caitlinramsey.github.io/zooquarium/',
    githubURL: 'https://github.com/caitlinramsey/zooquarium/',
  },
  {
    img: DiscDevs,
    title: 'DiscoverDevs',
    description: 'Connecting employers with newly graduated developers.',
    deployedURL: 'https://discoverdevs-2aa18af2a0dc.herokuapp.com/',
    githubURL: 'https://github.com/Prototype1309/DiscoverDevs',
  },
  {
    img: SingleGame,
    title: 'BUGBytes',
    description: 'A gaming hub to connect, collaborate, & conquer together.',
    deployedURL: 'https://bugbytes-eea33095845f.herokuapp.com/',
    githubURL: 'https://github.com/HarrisSte/BUGbytes',
  },
  {
    img: Regex,
    title: 'Regex Tutorial: Hex Values',
    description: 'A regex tutorial providing information on hex values.',
    deployedURL:
      'https://gist.github.com/HarrisSte/de01a81758dfe8f8afdbe5334a015eb7',
  },
  {
    img: NoteTaker,
    title: 'Note-Taker',
    description: 'Easily enter, save, & remove notes.',
    deployedURL: 'https://pacific-inlet-29502.herokuapp.com/',
    githubURL: 'https://github.com/HarrisSte/Note-Taker',
  },
  {
    img: CodeQuiz,
    title: 'Coding Quiz',
    description: 'Test your knowledge of HTML, CSS, & JavaScript.',
    deployedURL: 'https://harrisste.github.io/Coding-Quiz/',
    githubURL: 'https://github.com/HarrisSte/Coding-Quiz',
  },
  {
    img: PwGen,
    title: 'Password Generator',
    description: 'An application that will generate passwords for users.',
    deployedURL: 'https://harrisste.github.io/Password-Generator/',
    githubURL: 'https://github.com/HarrisSte/Password-Generator',
  },
  {
    img: JATE,
    title: 'J.A.T.E.',
    description: 'A note-taking application that meets PWA criteria.',
    deployedURL: 'https://just-anthr-txt-editor-b5f1347fd808.herokuapp.com/',
    githubURL: 'https://github.com/HarrisSte/Just-Another-Text-Editor',
  },
  {
    img: kitchWitch,
    title: 'The Kitchen Witch',
    description:
      '-- UNDER DEVELOPMENT -- Future site where users can find recipes & YouTube tutorials.',
    deployedURL: 'https://thekitchenwitch.netlify.com',
    githubURL: 'https://github.com/HarrisSte/HexleLich-The-Kitchen-Witch',
  },
  {
    img: jennsCupcakes,
    title: 'Cupcakes by Jenn',
    description:
      '-- UNDER DEVELOPMENT -- Future site for Cupcakes by Jenn. An emerging, award-winning, bakery based in Iowa.',
    deployedURL: 'https://jennscupcakes.netlify.com',
    githubURL: '',
  },
];

function Portfolio() {
  return (
    <Container className='projects'>
      <Row xs={1} md={2} lg={4} className='g-4'>
        {projects.map((project, index) => (
          <Col key={index}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant='top' src={project.img} alt={project.description}/>
              <Card.Body>
                <Card.Title>
                  <h3>{project.title}</h3>
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button
                  href={project.deployedURL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Deployed Application
                </Button>
                <Button
                  href={project.githubURL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub <br></br>Repository
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
