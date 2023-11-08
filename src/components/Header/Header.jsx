import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Initials from '../../assets/ReactPortfolioINITIALS.png';

import './Header.css';

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
          <p>Full-Stack Software Developer</p>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Welcome</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <NavDropdown title='Social Media'>
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
