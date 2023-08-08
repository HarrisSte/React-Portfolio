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
      link: 'https://caitlinramsey.github.io/zoos-and-aquariums/',
    },
    {
      title: 'DiscoverDevs',
      description: 'Description of Project 2.',
      image: DiscDevs,
      link: '',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      image: ExampleCarouselImage,
      link: 'https://project3url.com',
    },
    {
      title: 'Project 4',
      description: 'Description of Project 3.',
      image: ExampleCarouselImage,
      link: 'https://project3url.com',
    },
    {
      title: 'Project 5',
      description: 'Description of Project 3.',
      image: ExampleCarouselImage,
      link: 'https://project3url.com',
    },
    {
      title: 'Project 6',
      description: 'Description of Project 3.',
      image: ExampleCarouselImage,
      link: 'https://project3url.com',
    },
  ];

  return (
    <div className='carousel-container'>
      <ProjectDescription
        title='Portfolio'
        description='Scroll left or right to look through my different projects. If you want to access the deployed application, go ahead and click on the image.'
      />

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className='custom-carousel'
      >
        {projects.map((project, idx) => (
          <Carousel.Item key={idx}>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
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
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
