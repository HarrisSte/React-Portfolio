// Importing necessary styles and files.
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Initials from '../../assets/ReactPortfolioINITIALS.png';

function Header() {
  return (
    <Navbar expand='lg' className='nav-bar'>
      <Container>
        <div className='logo'>
          <a href='/'>
            <img src={Initials} width={120} height={120} />
          </a>
        </div>
        <Navbar.Brand href='/'>
          Stephanie Harris <br></br>
          <p>Full-Stack Web Developer</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Welcome</Nav.Link>
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

export default Header;
