// Importing necessary items for the 'Portfolio' section.
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../assets/Wildflowers.jpg'; // Placeholder for now
import ZooImg from '../../assets/Project1SS.jpg';
import DiscDevs from '../../assets/DiscDevs.jpg';
import '../Portfolio/Portfolio.css';

function ProjectDescription({ title, description }) {
  return (
    <div className='project-description'>
      <div className='project-description-inner'>
        <h1>{title}</h1>
        <p className='description-text'>{description}</p>
      </div>
    </div>
  );
}

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const projects = [
    {
      title: 'Zooquarium',
      description:
        'Zooquarium is a interactive application where users can search for their favorite animals & local zoos.',
      image: ZooImg,
      githubLink: 'https://github.com/yourusername/zoos-and-aquariums',
      deployedLink: 'https://caitlinramsey.github.io/zoos-and-aquariums/',
    },
    {
      title: 'DiscoverDevs',
      description:
        'An app connecting employers with newly graduated developers. This repository contains the code for seamless matching, showcasing skills, and streamlining hiring processes. Join the community and bridge the gap in the tech industry.',
      image: DiscDevs,
      githubLink: 'https://www.github.com',
      deployedLink: 'https://github.com',
    },
    {
      title: 'Just Another Text Editor',
      description:
        'JATE is A single-page application that meets the PWA criteria. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser as well as in the case of being offline.',
      image: ExampleCarouselImage,
      githubLink: 'https://github.com/HarrisSte/Just-Another-Text-Editor',
      deployedLink: 'https://just-anthr-txt-editor-b5f1347fd808.herokuapp.com/',
    },
    {
      title: 'Note-Taker',
      description:
        'A note-taker application that allows users to easily enter, save, and remove notes.',
      image: ExampleCarouselImage,
      githubLink: 'https://github.com/HarrisSte/Note-Taker',
      deployedLink: 'https://pacific-inlet-29502.herokuapp.com/',
    },
    {
      title: 'Coding Quiz',
      description:
        'A short coding quiz to test your knowledge of HTML, CSS, and JavaScript.',
      image: ExampleCarouselImage,
      githubLink: 'https://github.com/HarrisSte/Coding-Quiz',
      deployedLink: 'https://harrisste.github.io/Coding-Quiz/',
    },
    {
      title: 'Project 6',
      description: 'Description of Project 3.',
      image: ExampleCarouselImage,
      githubLink: 'https://www.github.com',
      deployedLink: 'https://github.com',
    },
  ];

  return (
    <div className='carousel-container'>
      <ProjectDescription
        title='Portfolio'
        description='Scroll left or right to look through my different projects. You will find the corresponding GitHub and deployed application links at the bottom of each image.'
      />

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className='custom-carousel'
      >
        {projects.map((project, idx) => (
          <Carousel.Item key={idx}>
            <a
              href={project.deployedLink}
              target='_blank'
              rel='noopener noreferrer'
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
