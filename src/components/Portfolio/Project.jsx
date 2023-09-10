import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ZooImg from '../../assets/Project1SS.jpg';
import DiscDevs from '../../assets/DiscDevs.jpg';
import JATE from '../../assets/JATE.jpg';
import NoteTaker from '../../assets/notetaker.jpg';
import CodeQuiz from '../../assets/codingquiz.jpg';
import PwGen from '../../assets/PWGen.jpg';
import SingleGame from '../../assets/SingleGame.jpg';
import '../Portfolio/Portfolio.css';

function AutoLayoutExample() {
  return (
    <Container>
      <Row className='projects'>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={ZooImg} />
            <Card.Body>
              <Card.Title>
                <h3>Zooquarium</h3>
              </Card.Title>
              <Card.Text>
                Search for your favorite animals & local accredited zoos!
              </Card.Text>
              <Button href='https://caitlinramsey.github.io/zoos-and-aquariums/'>
                <span>Deployed Application</span>
              </Button>
              <Button href='https://github.com/caitlinramsey/zoos-and-aquariums'>
                <span>GitHub Repository</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={DiscDevs} />
            <Card.Body>
              <Card.Title>
                <h3>DiscoverDevs</h3>
              </Card.Title>
              <Card.Text>
                Connecting employers with newly graduated developers.
              </Card.Text>
              <Button href='https://discoverdevs-2aa18af2a0dc.herokuapp.com/'>
                <span>Deployed Application</span>
              </Button>
              <Button href='https://github.com/Prototype1309/DiscoverDevs'>
                <span>GitHub Repository</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={SingleGame} />
            <Card.Body>
              <Card.Title>
                <h3>BUGBytes</h3>
              </Card.Title>
              <Card.Text>
                A gaming hub to connect, collaborate, and conquer together.
              </Card.Text>
              <Button href='https://bugbytes-eea33095845f.herokuapp.com/'>
                <span>Deployed Application</span>
              </Button>
              <Button href='https://github.com/HarrisSte/BUGbytes'>
                <span>GitHub Repository</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={NoteTaker} />
            <Card.Body>
              <Card.Title>
                <h3>Note-Taker</h3>
              </Card.Title>
              <Card.Text>Easily enter, save, and remove notes.</Card.Text>
              <Button href='https://pacific-inlet-29502.herokuapp.com/'>
                <span>Deployed Application</span>
              </Button>
              <Button href='https://github.com/HarrisSte/Note-Taker'>
                <span>GitHub Repository</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={CodeQuiz} />
            <Card.Body>
              <Card.Title>
                <h3>Coding Quiz</h3>
              </Card.Title>
              <Card.Text>
                Test your knowledge of HTML, CSS, and JavaScript.
              </Card.Text>
              <Button href='https://harrisste.github.io/Coding-Quiz/'>
                <span>Deployed Application</span>
              </Button>
              <Button href='https://github.com/HarrisSte/Coding-Quiz'>
                <span>GitHub Repository</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={PwGen} />
            <Card.Body>
              <Card.Title>
                <h3>Password Generator</h3>
              </Card.Title>
              <Card.Text>
                An application that will generate passwords for users.
              </Card.Text>

              <Button href='https://harrisste.github.io/Password-Generator/'>
                <span>Deployed Application</span>
              </Button>
              <Button href='https://github.com/HarrisSte/Password-Generator'>
                <span>GitHub Repository</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
