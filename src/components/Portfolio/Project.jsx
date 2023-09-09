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
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={ZooImg} />
            <Card.Body>
              <Card.Title>Zooquarium</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Deployed Application</Button>
              <Button variant='primary'>GitHub Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={DiscDevs} />
            <Card.Body>
              <Card.Title>DiscoverDevs</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Deployed Application</Button>
              <Button variant='primary'>GitHub Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={SingleGame} />
            <Card.Body>
              <Card.Title>BUGBytes</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Deployed Application</Button>
              <Button variant='primary'>GitHub Repository</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={NoteTaker} />
            <Card.Body>
              <Card.Title>Note-Taker</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Deployed Application</Button>
              <Button variant='primary'>GitHub Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={CodeQuiz} />
            <Card.Body>
              <Card.Title>Coding Quiz</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Deployed Application</Button>
              <Button variant='primary'>GitHub Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={PwGen} />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Deployed Application</Button>
              <Button variant='primary'>GitHub Repository</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
