import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function NavLinks() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkStyle = (link) => ({
    fontSize: hoveredLink === link ? '22px' : '18px',
    color: hoveredLink === link ? 'white' : '#922f44',
    transition: 'all 0.3s',
  });

  return (
    <>
      <Nav className='justify-content-center' activeKey='/'>
        <Nav.Item>
          <Nav.Link
            href='/'
            style={linkStyle('/')}
            onMouseEnter={() => handleMouseEnter('/')}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </Nav.Link>
        </Nav.Item>
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
