import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => setHoveredIcon(iconName);

  const socialIcons = [
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/harrisste9/',
      iconClass: 'fa-brands fa-linkedin',
    },
    {
      name: 'TpT',
      link: 'https://www.teacherspayteachers.com/store/stephanie-harris-3061',
      iconClass: 'fa-solid fa-chalkboard-user',
    },
    {
      name: 'github',
      link: 'https://github.com/HarrisSte/',
      iconClass: 'fa-brands fa-github',
    },
    {
      name: 'upwork',
      link: 'https://www.upwork.com/freelancers/~01fd4fb0211c0f8f3f?viewMode=1',
      iconClass: 'fa-brands fa-upwork',
    },
    {
      name: 'email',
      link: 'mailto:harrisste9@gmail.com',
      iconClass: 'fa-regular fa-envelope',
    },
  ];

  return (
    <footer>
      <div className='footer'>
        <Row className='footer-icons justify-content-center'>
          {socialIcons.map(({ name, link, iconClass }) => (
            <Col
              key={name}
              xs='auto'
              className={`text-center ${hoveredIcon === name ? 'hovered' : ''}`}
              onMouseEnter={() => handleIconHover(name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <a
                className={iconClass}
                href={link}
                target={name === 'email' ? '_self' : '_blank'}
                rel={name === 'email' ? '' : 'noopener noreferrer'}
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
                // { name: 'Credentials', path: '/credentials' },
                { name: 'Education Portfolio', path: '/education-portfolio' },
                {
                  name: 'Web Development Portfolio',
                  path: '/web-dev-portfolio',
                },
                { name: 'Contact Me', path: '/contact' },
              ].map(({ name, path }) => (
                <li key={name}>
                  <a href={path}>{name}</a>
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
