import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/logo.jpg";
function NavBar({ scroll }) {
  return (
    <Navbar expand="lg" className={`navbar-container ${scroll}`}>
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <Link to="/">
            <img className="nav-picture" src={logo}></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="a" />
        <Navbar.Collapse id="basic-navbar-nav" className="a">
          <Nav className="me-auto ">
            <Nav.Link href="#home">
              {" "}
              <Link className="link-active" to="/">
                ACASA
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <Link className="link" to="/Artisti">
                ARTISTI
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <Link className="link" to="/Program">
                PROGRAM
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <Link className="link" to="/Ateliere">
                ATELIERE
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <Link className="link" to="/CompetitiSportive">
                COMPETITII SPORTIVE
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <Link className="link" to="/Contact">
                CONTACT
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
