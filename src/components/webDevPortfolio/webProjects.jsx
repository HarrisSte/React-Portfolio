import { Container, Row, Col } from 'react-bootstrap';

import ZooImg from '../../assets/Project1SS.jpg';
import DiscDevs from '../../assets/DiscDevs.jpg';
import JATE from '../../assets/JATE.jpg';
import NoteTaker from '../../assets/notetaker.jpg';
import CodeQuiz from '../../assets/codingquiz.jpg';
import PwGen from '../../assets/PWGen.jpg';
import SingleGame from '../../assets/SingleGame.jpg';
import Regex from '../../assets/regex.jpg';
import jennsCupcakes from '../../assets/jennscupcakes.jpg';

import './webPortfolio.css';

const projects = [
  {
    img: jennsCupcakes,
    title: 'Cupcakes by Jenn',
    description:
      'Cupcakes by Jenn; an emerging, award-winning, bakery based in Iowa.',
    role: 'Author',
    deployedURL: 'https://cupcakesbyjenn.netlify.app',
    githubURL: 'https://github.com/HarrisSte/Cupcakes-by-Jenn',
  },
  {
    img: ZooImg,
    title: 'Zooquarium',
    description:
      'An application where users can search for  local accredited zoos & their animals!',
    role: 'Author',
    deployedURL: 'https://caitlinramsey.github.io/zooquarium/',
    githubURL: 'https://github.com/caitlinramsey/zooquarium/',
  },
  {
    img: DiscDevs,
    title: 'DiscoverDevs',
    description:
      'A networking application where employers/employees can connect with one another. Users can log in to view their profiles & connect with one another.',
    role: 'Back-End Development',
    deployedURL: '',
    githubURL: 'https://github.com/Prototype1309/DiscoverDevs',
  },
  {
    img: SingleGame,
    title: 'BUGBytes',
    description:
      'A gaming hub application where users can search for information on their favorite video games, connect with other players, & create lists.',
    role: 'Front & Back-End Development',
    deployedURL: '',
    githubURL: 'https://github.com/HarrisSte/BUGbytes',
  },
  {
    img: Regex,
    title: 'Regex Tutorial: Hex Values',
    description:
      'An informative regex tutorial that breaks down the meaning of hex values.',
    githubURL:
      'https://gist.github.com/HarrisSte/de01a81758dfe8f8afdbe5334a015eb7',
    role: 'Author',
    deployedURL:
      'https://gist.github.com/HarrisSte/de01a81758dfe8f8afdbe5334a015eb7',
  },

  {
    img: NoteTaker,
    title: 'Note-Taker',
    description:
      'A note-taking application where users can easily enter, save, & remove notes.',
    role: 'Author',
    deployedURL: '',
    githubURL: 'https://github.com/HarrisSte/Note-Taker',
  },
  {
    img: CodeQuiz,
    title: 'Coding Quiz',
    description:
      'A coding quiz that will your knowledge of HTML, CSS, & JavaScript.',
    role: 'Author',
    deployedURL: 'https://harrisste.github.io/Coding-Quiz/',
    githubURL: 'https://github.com/HarrisSte/Coding-Quiz',
  },
  {
    img: PwGen,
    title: 'Password Generator',
    description:
      'An application that will generate passwords for users. Note, this generator is not intended to be used as a fail-safe password generator.',
    role: 'Author',
    deployedURL: 'https://harrisste.github.io/Password-Generator/',
    githubURL: 'https://github.com/HarrisSte/Password-Generator',
  },
  {
    img: JATE,
    title: 'J.A.T.E.',
    description:
      'A note-taking application that meets progressive web application (PWA) criteria.',
    role: 'Author',
    deployedURL: '',
    githubURL: 'https://github.com/HarrisSte/Just-Another-Text-Editor',
  },
];
function Projects() {
  return (
    <Container>
      <Row id='projects' className='project-container'>
        <Col className='project-info'>
          <h1>
            <span className='underline--magical'>Web Development Projects</span>
          </h1>
          <section className='projects'>
            {projects.map((project, index) => (
              <article key={index}>
                <div>
                  <a
                    href={project.deployedURL}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <figure>
                      <img src={project.img} alt={project.title} />
                    </figure>
                  </a>
                  <div className='project-body'>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a>Project Role: {project.role}</a>
                    <br />
                    <br />
                    <div>
                      <a
                        href={project.githubURL}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        GitHub Repository
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
