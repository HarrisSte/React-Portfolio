//NavLinks to display at top of page. When selected, they will highlight a different color.

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
  fontSize: hoveredLink === link ? '30px' : '24px',
  color:
    (location.pathname === '/' && link === '/') ||
    (location.pathname === '/' + link && location.pathname !== '/')
      ? 'white'
      : '#922f44',
  transition: 'all 0.3s',
});

  return (
    <>
      <Nav className='justify-content-center' activeKey='About'>
        <Nav.Item>
          <Nav.Link
            href='/About'
            style={linkStyle('About')}
            onMouseEnter={() => handleMouseEnter('About')}
            onMouseLeave={handleMouseLeave}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href='/Portfolio'
            style={linkStyle('Portfolio')}
            onMouseEnter={() => handleMouseEnter('Portfolio')}
            onMouseLeave={handleMouseLeave}
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href='/Resume'
            style={linkStyle('Resume')}
            onMouseEnter={() => handleMouseEnter('Resume')}
            onMouseLeave={handleMouseLeave}
          >
            Resume & Proficiencies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href='/Contact'
            style={linkStyle('Contact')}
            onMouseEnter={() => handleMouseEnter('Contact')}
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
