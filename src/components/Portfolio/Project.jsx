import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../assets/Wildflowers.jpg'; // Placeholder for now
import ZooImg from '../../assets/Project1SS.jpg';
import DiscDevs from '../../assets/DiscDevs.jpg';
import '../Portfolio/Portfolio.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Update images for projects
  // Make sure all fit well and are cleaned up.
  const projects = [
    {
      title: 'Zooquarium',
      description: 'Description of Project 1.',
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
  ];

  return (
    <div className='carousel-container'>
      <h1>Portfolio</h1>
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
