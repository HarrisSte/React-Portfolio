import { Container, Row, Col } from 'react-bootstrap';

import Presentation from '../../assets/GTPresentationImg.png';
import Infographic1 from '../../assets/Infographic1.png';
import Infographic2 from '../../assets/Infographic2.png';
import Infographic3 from '../../assets/Infographic3.png';
import TheOutsiders from '../../assets/TheOutsiders.png';
import Lesson1 from '../../assets/Irony.png';
import Lesson2 from '../../assets/TTT.png';

import './eduPortfolio.css';

const projects = [
  {
    img: Presentation,
    title: 'Gifted & Talented Presentation',
    description:
      'Professional development presentation created for educators and parents exploring G/T education.',
    link: 'https://docs.google.com/presentation/d/1AMLU7dp5NrF2M0VJquiyx3aSFdQy14bil6TZmNgP18s/edit?usp=sharing',
    product: 'Training Presentation',
    role: 'Author',
  },
  {
    img: Lesson2,
    title: 'Mini-Lesson: There/Their/They\'re',
    description:
      'A mini-lesson, including an infographic, created to explore the differences between the commonly confused words of there, their, and they\'re.',
    link: 'https://www.canva.com/design/DAGS0AD89TU/fGIIJWXUKLGvUasn6LGbNg/view?utm_content=DAGS0AD89TU&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    product: 'Mini-lesson & Infographic',
    role: 'Author',
  },
  {
    img: Infographic1,
    title: 'History of Gifted & Talented Education',
    description:
      'An infographic illustrating the history of G/T Education in South Carolina.',
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
    title: 'The Outsiders: eLearning Curriculum',
    description:
      'An eLearning curriculum developed using South Carolina State Education Standards. Based on The Outsiders by S.E. Hinton, this curriculum has a focus on utilizing technology.',
    link: 'https://drive.google.com/drive/folders/1D74ISG3YTogctoIMy3CG3gBXMzI_9ZO2?usp=sharing',
    product: 'Curriculum',
    role: 'Author',
  },
  {
    img: Infographic3,
    title: 'Educator Roles & Responsibilities',
    description:
      'An infographic that has an overview of the professional roles and responsibilities of professional educators.',
    link: 'https://drive.google.com/file/d/1n72BbCOIWcD0yuSRYyHhOfDamcadllrm/view?usp=sharing',
    product: 'Infographic',
    role: 'Author',
  },
  {
    img: Lesson1,
    title: 'Literary Technique: Irony',
    description:
      'Developed using South Carolina State Education Standards, this curriculum includes learning targets & assessments to track progress. Learners explore the different types of Irony and the effect it has on the audience.',
    link: 'https://docs.google.com/document/d/1aWDWx9JKw1HGmakWSYuVU471Qay2AJX96GKt7gkcWxY/edit?usp=sharing',
    product: 'Curriculum',
    role: 'Author',
  },
];

function Projects() {
  return (
    <Container>
      <Row id='projects' className='project-container'>
        <Col className='project-info'>
          <h1>Education & Professional Development</h1>
          <section className='projects'>
            {projects.map((project, index) => (
              <article key={index}>
                <div>
                  <a
                    href={project.link}
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
                    <div>
                      <a>Product: {project.product}</a>
                      <br />
                      <a>Project Role: {project.role}</a>
                      <br />
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
