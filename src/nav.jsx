import { Link } from 'react-scroll'
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar sticky="top" bg="dark" expand="sm" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '130px' }} navbarScroll>
                        <Link className="nav-link" activeClass="active" to="about" spy={true} offset={-100}>Over-mij</Link>
                        <Link className="nav-link" activeClass="active" to="skills" spy={true} offset={-100}>Skills</Link>
                        <Link className="nav-link" activeClass="active" to="projects" spy={true} offset={-100}>Projecten</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}