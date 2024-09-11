import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  return (
    <footer>
      <div className='footer'>
        <Row className='row footer-icons justify-content-center'>
          <Col
            xs='auto'
            className={`text-center ${
              hoveredIcon === 'github' ? 'hovered' : ''
            }`}
            onMouseEnter={() => handleIconHover('github')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a
              className='fa-brands fa-github'
              href='https://github.com/HarrisSte/'
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
              className='fa-brands fa-linkedin'
              href='https://www.linkedin.com/in/harrisste9/'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </Col>
          <Col
            xs='auto'
            className={`text-center ${
              hoveredIcon === 'stack-overflow' ? 'hovered' : ''
            }`}
            onMouseEnter={() => handleIconHover('stack-overflow')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a
              className='fa-brands fa-stack-overflow'
              href='https://stackoverflow.com/users/23360673/harrisste'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </Col>
          <Col
            xs='auto'
            className={`text-center ${
              hoveredIcon === 'upwork' ? 'hovered' : ''
            }`}
            onMouseEnter={() => handleIconHover('upwork')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a
              className='fa-brands fa-upwork'
              href='https://www.upwork.com/freelancers/~01fd4fb0211c0f8f3f?viewMode=1'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </Col>
        </Row>

        <Row className='row footer-links justify-content-center'>
          <Col className='text-center'>
            <ul>
              <li>
                <a href='/'>Welcome</a>
              </li>
              <li>
                <a href='/about'>About Me</a>
              </li>
              <li>
                <a href='/credentials'>Credentials</a>
              </li>
              <li>
                <a href='/education-portfolio'>Education Portfolio</a>
              </li>
              <li>
                <a href='/web-dev-portfolio'>Web Development Portfolio</a>
              </li>
              <li>
                <a href='/contact'>Contact Me</a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className='row footer-copyright justify-content-center'>
          <Col className='text-center'>
            <div className='copyright'>Copyright © 2024 Stephanie Harris</div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
