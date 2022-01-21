import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useAuth } from "../context/ContextProvider";

export default function NavbarComp() {
  const { user, signUserIn, signUserOut } = useAuth();
  function handleSignIn() {
    signUserIn();
  }
  function handleSignOut() {
    signUserOut();
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
            {user && (
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">{user.displayName}</Tooltip>
                }
              >
                <Nav.Link>
                  <img
                    height="30"
                    className="rounded-circle"
                    width="30"
                    alt={user.displayName}
                    src={user.photoURL}
                  />
                </Nav.Link>
              </OverlayTrigger>
            )}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={user ? handleSignOut : handleSignIn}>
                {user ? "Sign Out" : "Sign In"}
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
