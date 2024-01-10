import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
const NetflixNavbar = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#221f1f" }} variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} width="100" height="55" className="d-inline-block align-top" alt="Netflix logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="netflix-navbar-nav" />
          <Navbar.Collapse id="netflix-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home" className="fw-bold" active>
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="fw-bold">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#pricing" className="fw-bold">
                Movies
              </Nav.Link>
              <Nav.Link href="#pricing" className="fw-bold">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#pricing" className="fw-bold">
                My List
              </Nav.Link> */}
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/tv-shows" className="nav-link">
                {" "}
                TV shows
              </NavLink>
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
              <NavLink to="/recently-added" className="nav-link">
                Recently Added
              </NavLink>
              <NavLink to="/my-list" className="nav-link">
                My list
              </NavLink>
            </Nav>
            <div className="d-flex align-items-center nav-icons">
              <Search color="white" className="mx-3 fs-5" />
              <div id="kids" className="text-white fw-bold">
                KIDS
              </div>
              <Bell color="white" className="mx-3 fs-5" />
              <PersonCircle color="white" className="mx-3 fs-5" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NetflixNavbar;
