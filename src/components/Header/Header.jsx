// Importing necessary styles and files.
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import profileImg from '../../assets/profileImg.jpg';

function Header() {
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
          : '#37AA88',
      transition: 'all 0.3s',
    });

  return (
    <header id='container' className='header'>
      {/* <div className='profile'>
        <img
          src={profileImg}
          alt='Profile image'
          className='img-fluid rounded-circle profile-image'
        />
      </div> */}
      <h1 className='header-name'>Stephanie Harris</h1>
      <Navbar className='navbar'>
        <Container>
          {/* <Navbar.Brand href='#home'>Stephanie Harris</Navbar.Brand> */}
          <Nav>
            <Nav.Link
              href='/About'
              style={linkStyle('About')}
              onMouseEnter={() => handleMouseEnter('About')}
              onMouseLeave={handleMouseLeave}
            >
              About
            </Nav.Link>
            <Nav.Link
              href='/Portfolio'
              style={linkStyle('Portfolio')}
              onMouseEnter={() => handleMouseEnter('Portfolio')}
              onMouseLeave={handleMouseLeave}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href='/Resume'
              style={linkStyle('Resume')}
              onMouseEnter={() => handleMouseEnter('Resume')}
              onMouseLeave={handleMouseLeave}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href='/Contact'
              style={linkStyle('Contact')}
              onMouseEnter={() => handleMouseEnter('Contact')}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
