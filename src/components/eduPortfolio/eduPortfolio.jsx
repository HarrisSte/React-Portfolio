import { Container, Row, Col } from 'react-bootstrap';

import ZooImg from '../../assets/Project1SS.jpg';
import DiscDevs from '../../assets/DiscDevs.jpg';
import JATE from '../../assets/JATE.jpg';
import NoteTaker from '../../assets/notetaker.jpg';
import CodeQuiz from '../../assets/codingquiz.jpg';

import './eduPortfolio.css';

const projects = [
  {
    img: ZooImg,
    title: 'Zooquarium',
    description: 'Search for  local accredited zoos & their animals!',
    githubURL: 'https://github.com/caitlinramsey/zooquarium/',
  },
  {
    img: DiscDevs,
    title: 'DiscoverDevs',
    description: 'Connecting employers with newly graduated developers.',
    githubURL: 'https://github.com/Prototype1309/DiscoverDevs',
  },
  {
    img: NoteTaker,
    title: 'Note-Taker',
    description: 'Easily enter, save, & remove notes.',
    githubURL: 'https://github.com/HarrisSte/Note-Taker',
  },
  {
    img: CodeQuiz,
    title: 'Coding Quiz',
    description: 'Test your knowledge of HTML, CSS, & JavaScript.',
    githubURL: 'https://github.com/HarrisSte/Coding-Quiz',
  },
  {
    img: JATE,
    title: 'J.A.T.E.',
    description: 'A note-taking application that meets PWA criteria.',
    githubURL: 'https://github.com/HarrisSte/Just-Another-Text-Editor',
  },
];
function Projects() {
  return (
    <Container>
      <Row id='projects' className='project-container'>
        <Col className='project-info'>
          <h1>
            <span className='underline--hover'>Projects</span>
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
