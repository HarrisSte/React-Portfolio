import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Initials from '../../assets/ReactPortfolioINITIALS.png';
import './Header.css';

function Header() {
  const location = useLocation();
  const [dropdownStates, setDropdownStates] = useState({
    portfolio: false,
    social: false,
  });

  const toggleDropdown = (name, value) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <Navbar className='nav-bar' expand='md'>
      <Container>
        <Link to='/' className='logo'>
          <img src={Initials} alt='Logo' width={120} height={120} />
        </Link>
        <Navbar.Brand as={Link} to='/'>
          <div className='brand-text'>
            <h2>Stephanie Harris</h2>
            <p>Leader | Educator | Software Developer</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/' className={isActive('/')}>
              Welcome
            </Nav.Link>
            <Nav.Link as={Link} to='/about' className={isActive('/about')}>
              About
            </Nav.Link>
            <NavDropdown
              title='Portfolios'
              className={isActive('/portfolio')}
              show={dropdownStates.portfolio}
              onMouseEnter={() => toggleDropdown('portfolio', true)}
              onMouseLeave={() => toggleDropdown('portfolio', false)}
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
            <NavDropdown
              title='Social Media'
              show={dropdownStates.social}
              onMouseEnter={() => toggleDropdown('social', true)}
              onMouseLeave={() => toggleDropdown('social', false)}
            >
              <NavDropdown.Item href='https://www.linkedin.com/in/harrisste9/'>
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href='https://github.com/HarrisSte/'>
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href='https://stackoverflow.com/users/23360673/harrisste'>
                Stack Overflow
              </NavDropdown.Item>
              <NavDropdown.Item href='https://www.upwork.com/freelancers/~01fd4fb0211c0f8f3f?mp_source=share'>
                UpWork
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/contact' className={isActive('/contact')}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
