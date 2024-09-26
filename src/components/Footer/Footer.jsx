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
        <Row className='footer-icons justify-content-center'>
          {[
            {
              name: 'github',
              link: 'https://github.com/HarrisSte/',
              icon: 'fa-github',
            },
            {
              name: 'linkedin',
              link: 'https://www.linkedin.com/in/harrisste9/',
              icon: 'fa-linkedin',
            },
            {
              name: 'stack-overflow',
              link: 'https://stackoverflow.com/users/23360673/harrisste',
              icon: 'fa-stack-overflow',
            },
            {
              name: 'upwork',
              link: 'https://www.upwork.com/freelancers/~01fd4fb0211c0f8f3f?viewMode=1',
              icon: 'fa-upwork',
            },
          ].map((social) => (
            <Col
              key={social.name}
              xs='auto'
              className={`text-center ${
                hoveredIcon === social.name ? 'hovered' : ''
              }`}
              onMouseEnter={() => handleIconHover(social.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <a
                className={`fa-brands ${social.icon}`}
                href={social.link}
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
                { name: 'Welcome', path: '/' },
                { name: 'About Me', path: '/about' },
                { name: 'Credentials', path: '/credentials' },
                { name: 'Education Portfolio', path: '/education-portfolio' },
                {
                  name: 'Web Development Portfolio',
                  path: '/web-dev-portfolio',
                },
                { name: 'Contact Me', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.path}>{link.name}</a>
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
