import Container from 'react-bootstrap/Container';
import {Row, Col, Button, Card} from 'react-bootstrap';

import ZooImg from '../../assets/Project1SS.jpg';
import DiscDevs from '../../assets/DiscDevs.jpg';
import JATE from '../../assets/JATE.jpg';
import NoteTaker from '../../assets/notetaker.jpg';
import CodeQuiz from '../../assets/codingquiz.jpg';
import PwGen from '../../assets/PWGen.jpg';
import SingleGame from '../../assets/SingleGame.jpg';
import Regex from '../../assets/regex.jpg';
import '../Portfolio/Portfolio.css';

function Portfolio() {
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
              <Button href='https://caitlinramsey.github.io/zooquarium/'>
                <span>Deployed Application</span>
              </Button>
              <Button href='https://github.com/caitlinramsey/zooquarium/'>
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
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={Regex} />
            <Card.Body>
              <Card.Title>
                <h3>Gist: Regex Tutorial: Hex Values </h3>
              </Card.Title>
              <Card.Text>
                A detailed regex tutorial providing information on how to
                understand hex values.
              </Card.Text>
              <Button href='https://gist.github.com/HarrisSte/de01a81758dfe8f8afdbe5334a015eb7'>
                <span>GitHub Gist</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='projects'>
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
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={JATE} />
            <Card.Body>
              <Card.Title>
                <h3>J.A.T.E.</h3>
              </Card.Title>
              <Card.Text>
                A note-taking application that meets PWA criteria.
              </Card.Text>
              <Button href='https://just-anthr-txt-editor-b5f1347fd808.herokuapp.com/'>
                <span>Deployed Application</span>
              </Button>
              <Button href='https://github.com/HarrisSte/Just-Another-Text-Editor'>
                <span>GitHub Repository</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
