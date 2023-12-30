import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

function TopNavBar() {
  return (
    <Navbar expand="lg" className="bg-tertiary border-bottom border-2 border-secondary">
      <Container fluid>
        <Navbar.Brand href="#" className='mx-auto'>
          <Stack gap={3}>
            <Image src={logo} fluid className="mx-auto p-0 my-0 logo" />
            <div className="mx-auto fs-4 my-0 p-0 text-primary">Peter Skowronek</div>
          </Stack>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
        
            <Nav className="me-0 my-2 my-lg-0 mx-5" style={{ maxHeight: '100px' }}>
              <Nav.Link href="#action1" className='mx-5 fs-4 text-primary'>Professional Experience</Nav.Link>
              <Nav.Link href="#action2" className='mx-5 fs-4 text-primary'>Education</Nav.Link>
              <Nav.Link href="#action2" className='mx-5 fs-4 text-primary'>Projects</Nav.Link>
              <Nav.Link href="#action2" className='mx-5 fs-4 text-primary'>Resume</Nav.Link>
            </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
