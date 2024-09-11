import { Container, Row, Col } from 'react-bootstrap';

import ZooImg from '../../assets/Project1SS.jpg';
import DiscDevs from '../../assets/DiscDevs.jpg';
import JATE from '../../assets/JATE.jpg';
import NoteTaker from '../../assets/notetaker.jpg';
import CodeQuiz from '../../assets/codingquiz.jpg';
import PwGen from '../../assets/PWGen.jpg';
import SingleGame from '../../assets/SingleGame.jpg';
import Regex from '../../assets/regex.jpg';
import kitchWitch from '../../assets/theKitchWitch.jpg';
import jennsCupcakes from '../../assets/jennscupcakes.jpg';

import './webPortfolio.css';

const projects = [
  {
    img: jennsCupcakes,
    title: 'Cupcakes by Jenn',
    description:
      'Cupcakes by Jenn; an emerging, award-winning, bakery based in Iowa.',
    role: 'Author',
    githubURL: 'https://github.com/HarrisSte/Cupcakes-by-Jenn',
  },
  {
    img: kitchWitch,
    title: 'The Kitchen Witch',
    description:
      '-- UNDER DEVELOPMENT -- Future site where users can find recipes & YouTube tutorials.',
    role: 'Author',
    githubURL: 'https://github.com/HarrisSte/HexleLich-The-Kitchen-Witch',
  },
  {
    img: ZooImg,
    title: 'Zooquarium',
    description: 'Search for  local accredited zoos & their animals!',
    role: 'Author',
    githubURL: 'https://github.com/caitlinramsey/zooquarium/',
  },
  {
    img: DiscDevs,
    title: 'DiscoverDevs',
    description: 'Connecting employers with newly graduated developers.',
    role: 'Back-End Development',
    githubURL: 'https://github.com/Prototype1309/DiscoverDevs',
  },
  {
    img: SingleGame,
    title: 'BUGBytes',
    description: 'A gaming hub to connect, collaborate, & conquer together.',
    role: 'Front & Back-End Development',
    githubURL: 'https://github.com/HarrisSte/BUGbytes',
  },
  {
    img: Regex,
    title: 'Regex Tutorial: Hex Values',
    description: 'A regex tutorial providing information on hex values.',
    githubURL:
      'https://gist.github.com/HarrisSte/de01a81758dfe8f8afdbe5334a015eb7',
    role: 'Author',
  },

  {
    img: NoteTaker,
    title: 'Note-Taker',
    description: 'Easily enter, save, & remove notes.',
    role: 'Author',
    githubURL: 'https://github.com/HarrisSte/Note-Taker',
  },
  {
    img: CodeQuiz,
    title: 'Coding Quiz',
    description: 'Test your knowledge of HTML, CSS, & JavaScript.',
    role: 'Author',
    githubURL: 'https://github.com/HarrisSte/Coding-Quiz',
  },
  {
    img: PwGen,
    title: 'Password Generator',
    description: 'An application that will generate passwords for users.',
    role: 'Author',
    githubURL: 'https://github.com/HarrisSte/Password-Generator',
  },
  {
    img: JATE,
    title: 'J.A.T.E.',
    description: 'A note-taking application that meets PWA criteria.',
    role: 'Author',
    githubURL: 'https://github.com/HarrisSte/Just-Another-Text-Editor',
  },
];
function Projects() {
  return (
    <Container>
      <Row id='projects' className='project-container'>
        <Col className='project-info'>
          <h1>
            <span className='underline--hover'>Web Development Projects</span>
          </h1>
          <section className='projects'>
            {projects.map((project, index) => (
              <article key={index}>
                <div>
                  <figure>
                    <img src={project.img} alt='image of project' />
                  </figure>
                  <div className='project-body'>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a>Project Role: {project.role}</a>
                    <br></br>
                    <br></br>
                    <div>
                      <a
                        href={project.githubURL}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        GitHub
                      </a>
                      <span>&nbsp;|&nbsp;</span>
                      <a
                        href={project.websiteURL}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Deployed Website
                      </a>
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
