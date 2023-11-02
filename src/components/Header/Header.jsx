// Importing necessary styles and files.
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Initials from '../../assets/ReactPortfolioINITIALS.png';

function BasicExample() {
  return (
    <Navbar expand='lg' className='nav-bar'>
      <Container>
        <div className='logo'>
          <a href='/'>
            <img src={Initials} width={120} height={120} />
          </a>
        </div>
        <Navbar.Brand href='/home'>
          Stephanie Harris <br></br>
          <p>Full-Stack Web Developer</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <NavDropdown title='Social Media' id='basic-nav-dropdown'>
              <NavDropdown.Item href='https://www.linkedin.com/in/harrisste9/'>
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href='https://github.com/HarrisSte/'>
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

// import {Nav, Navbar, Container} from 'react-bootstrap';

// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function Header() {
//     const location = useLocation();

//     const [hoveredLink, setHoveredLink] = useState(null);

//     const handleMouseEnter = (link) => {
//       setHoveredLink(link);
//     };

//     const handleMouseLeave = () => {
//       setHoveredLink(null);
//     };

//     const linkStyle = (link) => ({
//       fontSize: hoveredLink === link ? '30px' : '24px',
//       color:
//         (location.pathname === '/' && link === '/') ||
//         (location.pathname === '/' + link && location.pathname !== '/')
//           ? 'white'
//           : '#37AA88',
//       transition: 'all 0.3s',
//     });

//   return (
//     <header className='header'>
//       <h1 className='header-name'>Stephanie Harris</h1>
//       <Navbar>
//         <Container className='navbar'>
//           <Nav>
//             <Nav.Link
//               href='/about'
//               style={linkStyle('About')}
//               onMouseEnter={() => handleMouseEnter('About')}
//               onMouseLeave={handleMouseLeave}
//             >
//               About
//             </Nav.Link>
//             <Nav.Link
//               href='/portfolio'
//               style={linkStyle('Portfolio')}
//               onMouseEnter={() => handleMouseEnter('Portfolio')}
//               onMouseLeave={handleMouseLeave}
//             >
//               Portfolio
//             </Nav.Link>
//             <Nav.Link
//               href='/resume'
//               style={linkStyle('Resume')}
//               onMouseEnter={() => handleMouseEnter('Resume')}
//               onMouseLeave={handleMouseLeave}
//             >
//               Resume
//             </Nav.Link>
//             <Nav.Link
//               href='/contact'
//               style={linkStyle('Contact')}
//               onMouseEnter={() => handleMouseEnter('Contact')}
//               onMouseLeave={handleMouseLeave}
//             >
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </header>
//   );
// }

// export default Header;
