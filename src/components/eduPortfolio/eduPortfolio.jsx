import { Container, Row, Col } from 'react-bootstrap';

import Presentation from '../../assets/GTPresentationImg.png';
import Infographic1 from '../../assets/Infographic1.png';
import Infographic2 from '../../assets/Infographic2.png';
import Infographic3 from '../../assets/Infographic3.png';
import TheOutsiders from '../../assets/TheOutsiders.png';
import BookPub from '../../assets/Writing.png';

import './eduPortfolio.css';

const projects = [
  {
    img: Presentation,
    title: 'Gifted & Talented Presentation',
    description:
      'Presentation created for parents and educators exploring the ins and outs G/T Education.',
    link: 'https://docs.google.com/presentation/d/1BTuvyEUoQk4a1lzhJAdIunpJO498UOAZ/edit?usp=sharing&ouid=117890310285460485858&rtpof=true&sd=true',
    product: 'Training Presentation',
    role: 'Author',
  },
  {
    img: Infographic1,
    title: 'History of Gifted & Talented Education',
    description:
      'A timeline infographic illustrating the history of G/T Education in South Carolina.',
    link: 'https://drive.google.com/file/d/1yD3b-00PdZxCXXz-I0ED3q_Zur1IIXtg/view?usp=sharing',
    product: 'Infographic',
    role: 'Author',
  },
  {
    img: Infographic2,
    title: 'Gifted & Talented Extension Model',
    description:
      'An infographic that has an overview of the Extension Model used in Gifted and Talented Education.',
    link: 'https://drive.google.com/file/d/1e-I3N3aBb-uYF_r_w3fEgPiswaGolgOl/view?usp=sharing',
    product: 'Infographic',
    role: 'Author',
  },
  {
    img: TheOutsiders,
    title: 'The Outsiders | eLearning',
    description:
      'An eLearning curriculum developed using South Carolina State Education Standards. Based on The Outsiders by S.E. Hinton, this curriculum has a focus with utilizing technology.',
    link: 'https://drive.google.com/drive/folders/1D74ISG3YTogctoIMy3CG3gBXMzI_9ZO2?usp=sharing',
    product: 'eLearning Curriculum',
    role: 'Author',
  },
  {
    img: Infographic3,
    title: 'Educator Roles & Responsibilities',
    description:
      'An infographic that has an overview of the roles and responsibilities of professional educators.',
    link: 'https://drive.google.com/file/d/1n72BbCOIWcD0yuSRYyHhOfDamcadllrm/view?usp=sharing',
    product: 'Infographic',
    role: 'Author',
  },
  {
    img: BookPub,
    title: 'Exploring Writing & Authors Craft',
    description:
      'A curriculum developed using South Carolina State Education Standards. Learners explore writing and authors craft by putting into action a book publication from start to finish.',
    link: '',
    product: 'Curriculum',
    role: 'Author',
  },
];
function Projects() {
  return (
    <Container>
      <Row id='projects' className='project-container'>
        <Col className='project-info'>
          <h1>
            <span className='underline--magical'>
              Education & Professional Development Projects
            </span>
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
                      <a>Product: {project.product}</a>
                      <br></br>
                      <a>Project Role: {project.role}</a>
                      <br></br>
                      <br></br>
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Google Drive
                      </a>
                      <span>&nbsp;|&nbsp;</span>
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
