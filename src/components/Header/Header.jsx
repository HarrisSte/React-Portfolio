import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Initials from '../../assets/ReactPortfolioINITIALS.png';

import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <Navbar expand='lg' className='nav-bar'>
      <Container>
        <div className='logo'>
          <Link to='/'>
            <img src={Initials} width={120} height={120} />
          </Link>
        </div>
        <Navbar.Brand as={Link} to='/'>
          Stephanie Harris <br></br>
          <p>Full-Stack Software Developer</p>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='ml-auto'>
            <Nav.Link
              as={Link}
              to='/'
              className={location.pathname === '/' ? 'active' : ''}
            >
              Welcome
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/about'
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/portfolio'
              className={location.pathname === '/portfolio' ? 'active' : ''}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
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
