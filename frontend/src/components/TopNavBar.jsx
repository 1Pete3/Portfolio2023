import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

function TopNavBar() {
  return (
    <Navbar expand="lg" className="bg-tertiary border-bottom border-2 border-secondary">
      <Stack>
        <Navbar.Brand href="/" className="navbarBrand">
          <Stack gap={3} className="brand">
            <Image src={logo} fluid className="logo" />
            <div className="mx-auto fs-4 my-0 p-0 text-primary">Peter Skowronek</div>
          </Stack>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" className="navtoggleButon" />
        </Stack>
      <Navbar.Collapse id="navbarCollapse" className=" ">
        <div className="navlinkContainer">
          <Nav className="" style={{ maxHeight: '10%' }}>
            <Nav.Link href="/" className="mx-5 fs-4 text-primary navlink">
              Professional Experience
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-5 fs-4 text-primary">
              Education
            </Nav.Link>
            <Nav.Link href="/Projects" className="mx-5 fs-4 text-primary">
              Projects
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-5 fs-4 text-primary">
              Resume
            </Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavBar;
