//NavLinks to display at top of page. When selected, they will highlight a different color.
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function NavLinks() {
  const location = useLocation();

  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

const linkStyle = (link) => ({
  fontSize: hoveredLink === link ? '22px' : '18px',
  color:
    (location.pathname === '/' && link === '/') ||
    (location.pathname === '/' + link && location.pathname !== '/')
      ? 'white'
      : '#922f44',
  transition: 'all 0.3s',
});

  return (
    <>
      <Nav className='justify-content-center' activeKey='about'>
        <Nav.Item>
          <Nav.Link
            href='about'
            style={linkStyle('about')}
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href='portfolio'
            style={linkStyle('portfolio')}
            onMouseEnter={() => handleMouseEnter('portfolio')}
            onMouseLeave={handleMouseLeave}
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href='resume'
            style={linkStyle('resume')}
            onMouseEnter={() => handleMouseEnter('resume')}
            onMouseLeave={handleMouseLeave}
          >
            Resume
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href='contact'
            style={linkStyle('contact')}
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavLinks;
