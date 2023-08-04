import Nav from 'react-bootstrap/Nav';

function NavLinks() {
  return (
    <>
      <Nav className='justify-content-center' activeKey='/'>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='portfolio'>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='resume'>Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='contact'>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
export default NavLinks;
