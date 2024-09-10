import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Initials from '../../assets/ReactPortfolioINITIALS.png';
import './Header.css';

function Header() {
  const location = useLocation();
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <Navbar expand='lg' className='nav-bar'>
      <Container>
        <Link to='/' className='logo'>
          <img src={Initials} alt='Logo' width={120} height={120} />
        </Link>
        <Navbar.Brand as={Link} to='/'>
          <div className='brand-text'>
            Stephanie Harris
            <p>Full-Stack Software Developer</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/' className={isActive('/')}>
              Welcome
            </Nav.Link>
            <Nav.Link as={Link} to='/about' className={isActive('/about')}>
              About
            </Nav.Link>
            <NavDropdown
              title='Portfolio'
              className={isActive('/portfolio')}
              show={showPortfolioDropdown}
              onMouseEnter={() => setShowPortfolioDropdown(true)}
              onMouseLeave={() => setShowPortfolioDropdown(false)}
            >
              <NavDropdown.Item
                as={Link}
                to='/education-portfolio'
                className={isActive('/education-portfolio')}
              >
                Education
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='/web-dev-portfolio'
                className={isActive('/web-dev-portfolio')}
              >
                Web Development
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to='/contact' className={isActive('/contact')}>
              Contact
            </Nav.Link>
            <NavDropdown
              title='Social Media'
              show={showSocialDropdown}
              onMouseEnter={() => setShowSocialDropdown(true)}
              onMouseLeave={() => setShowSocialDropdown(false)}
            >
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
