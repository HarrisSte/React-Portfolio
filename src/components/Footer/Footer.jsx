import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const socialLinks = [
  {
    name: 'github',
    iconClass: 'fa-brands fa-github',
    url: 'https://github.com/HarrisSte/',
  },
  {
    name: 'linkedin',
    iconClass: 'fa-brands fa-linkedin',
    url: 'https://www.linkedin.com/in/harrisste9/',
  },
  {
    name: 'stack-overflow',
    iconClass: 'fa-brands fa-stack-overflow',
    url: 'https://stackoverflow.com/users/23360673/harrisste',
  },
  {
    name: 'upwork',
    iconClass: 'fa-brands fa-upwork',
    url: 'https://www.upwork.com/freelancers/~01fd4fb0211c0f8f3f?viewMode=1',
  },
  {
    name: 'email',
    iconClass: 'fa-regular fa-envelope',
    url: 'mailto:harrisste9@gmail.com',
  },
];

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => setHoveredIcon(iconName);

  return (
    <footer>
      <div className='footer'>
        <Row className='footer-icons justify-content-center'>
          {socialLinks.map(({ name, iconClass, url }) => (
            <Col
              key={name}
              xs='auto'
              className={`text-center ${hoveredIcon === name ? 'hovered' : ''}`}
              onMouseEnter={() => handleIconHover(name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <a
                className={iconClass}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              />
            </Col>
          ))}
        </Row>

        <Row className='footer-links justify-content-center'>
          <Col className='text-center'>
            <ul>
              {[
                'Welcome',
                'About Me',
                'Credentials',
                'Education Portfolio',
                'Web Development Portfolio',
                'Contact Me',
              ].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase().replace(/ /g, '-')}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className='footer-copyright justify-content-center'>
          <Col className='text-center'>
            <div className='copyright'>Copyright © 2024 Stephanie Harris</div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
