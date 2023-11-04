//Importing necessary files for the footer.
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Footer/Footer.css';

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  return (
    <footer>
      <Row className='footer'>
        <Col
          xs='auto'
          className={`text-center ${
            hoveredIcon === 'envelope' ? 'hovered' : ''
          }`}
          onMouseEnter={() => handleIconHover('envelope')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <a
            className='bi bi-envelope'
            href='mailto:harrisste9@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          ></a>
        </Col>
        <Col
          xs='auto'
          className={`text-center ${hoveredIcon === 'github' ? 'hovered' : ''}`}
          onMouseEnter={() => handleIconHover('github')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <a
            className='bi bi-github'
            href='https://github.com/HarrisSte'
            target='_blank'
            rel='noopener noreferrer'
          ></a>
        </Col>
        <Col
          xs='auto'
          className={`text-center ${
            hoveredIcon === 'linkedin' ? 'hovered' : ''
          }`}
          onMouseEnter={() => handleIconHover('linkedin')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <a
            className='bi bi-linkedin'
            href='https://www.linkedin.com/in/harrisste9/'
            target='_blank'
            rel='noopener noreferrer'
          ></a>
        </Col>
        <div className='copyright'>&copy; Stephanie Harris 2023</div>
      </Row>
    </footer>
  );
}

export default Footer;
