import React from 'react';
import { useState } from 'react';
import '../Footer/Footer.css';
import { Row, Col } from 'react-bootstrap';

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <Row className='justify-content-center'>
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
              href='mailto:st3phanie.harris@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </Col>

          <Col
            xs='auto'
            className={`text-center ${
              hoveredIcon === 'twitter' ? 'hovered' : ''
            }`}
            onMouseEnter={() => handleIconHover('twitter')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a
              className='bi bi-twitter'
              href='https://twitter.com/HexleLich'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </Col>

          <Col
            xs='auto'
            className={`text-center ${
              hoveredIcon === 'github' ? 'hovered' : ''
            }`}
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
              href='https://www.linkedin.com/in/stephanie-harris-5069aa224/'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
