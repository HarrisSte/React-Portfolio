// Importing necessary items for the 'Portfolio' section.
import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ZooImg from '../../assets/Project1SS.jpg';
import DiscDevs from '../../assets/DiscDevs.jpg';
import JATE from '../../assets/JATE.jpg';
import NoteTaker from '../../assets/notetaker.jpg';
import CodeQuiz from '../../assets/codingquiz.jpg';
import PwGen from '../../assets/PWGen.jpg';
import '../Portfolio/Portfolio.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const projects = [
    {
      title: 'Zooquarium',
      description: 'Search for your favorite animals & local zoos.',
      image: ZooImg,
      githubLink: 'https://github.com/caitlinramsey/zoos-and-aquariums',
      deployedLink: 'https://caitlinramsey.github.io/zoos-and-aquariums/',
    },
    {
      title: 'DiscoverDevs',
      description: 'Connecting employers with newly graduated developers.',
      image: DiscDevs,
      githubLink: 'https://github.com/Prototype1309/DiscoverDevs',
      deployedLink: 'https://discoverdevs-2aa18af2a0dc.herokuapp.com/',
    },
    {
      title: 'JATE',
      description: 'Just another text editor that meets PWA criteria.',
      image: JATE,
      githubLink: 'https://github.com/HarrisSte/Just-Another-Text-Editor',
      deployedLink: 'https://just-anthr-txt-editor-b5f1347fd808.herokuapp.com/',
    },
    {
      title: 'Note-Taker',
      description: 'Easily enter, save, and remove notes.',
      image: NoteTaker,
      githubLink: 'https://github.com/HarrisSte/Note-Taker',
      deployedLink: 'https://pacific-inlet-29502.herokuapp.com/',
    },
    {
      title: 'Coding Quiz',
      description: 'Test your knowledge of HTML, CSS, and JavaScript.',
      image: CodeQuiz,
      githubLink: 'https://github.com/HarrisSte/Coding-Quiz',
      deployedLink: 'https://harrisste.github.io/Coding-Quiz/',
    },
    {
      title: 'Password Generator',
      description:
        'An application that will generate passwords for users. Note: These passwords are NOT secure.',
      image: PwGen,
      githubLink: 'https://github.com/HarrisSte/Password-Generator',
      deployedLink: 'https://harrisste.github.io/Password-Generator/',
    },
  ];

  return (
    <div className='carousel-container'>
      <h1>Portfolio</h1>
      <h2>
        Here you can scroll through my various projects that I have worked on;
        both front-end & back-end.
        <br></br>
        <br></br>
        For my front-end projects, you will find that there are links to both
        the GitHub repositories, as well as links to the deployed applications.
        You can also view you will find links to the GitHub Repository and/or
        the deployed application below the image.
      </h2>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className='custom-carousel'
      >
        {projects.map((project, idx) => (
          <Carousel.Item key={idx}>
            <a
            // href={project.deployedLink}
            // target='_blank'
            // rel='noopener noreferrer'
            >
              <img
                className='d-block w-100'
                src={project.image}
                alt={`${project.title} slide`}
              />
              <Carousel.Caption>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </Carousel.Caption>
            </a>

            <div className='link-section'>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-link'
                >
                  GitHub
                </a>
              )}
              {project.deployedLink && (
                <a
                  href={project.deployedLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-link'
                >
                  Deployed App
                </a>
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
