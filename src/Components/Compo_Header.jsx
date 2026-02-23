import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar expand="lg"  id="NavBar">
      <Container>

        {/* LEFT */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          XYZ University
        </Navbar.Brand>

     <Navbar.Toggle>
  <span class="material-symbols-outlined" id="Toggle-ThreeDot">
density_medium
</span>
</Navbar.Toggle>


        <Navbar.Collapse>

          {/* CENTER */}
          <Nav className="mx-auto" id="CenterHDR">
            <Nav.Link as={Link} to="/" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="px-3">
              Contact Us
            </Nav.Link>
    
    
          </Nav>

          {/* RIGHT */}
          <Nav className="ms-auto" id="RightHDR-Styling">



        <select  id="Language"><option>English</option></select>


            <Nav.Link className="px-3"as={Link} to={"/unavailable"}  >Help Desk <span class="material-symbols-outlined">
call
</span> </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

