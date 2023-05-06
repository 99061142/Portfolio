import { Link } from 'react-scroll'
import { Container, Navbar, Nav } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

function Navigation() {
    const LINKS = [
        {
            'text': 'Over-mij',
            'to': 'about'
        },
        {
            'text': 'Skills',
            'to': 'skills'
        },
        {
            'text': 'Projecten',
            'to': 'projects'
        }
    ];
    return (
        <Navbar sticky='top' bg='dark' expand='sm' variant='dark'>
            <Container fluid>
                <NavbarBrand href='#'>Portfolio</NavbarBrand>
                <NavbarToggle aria-controls='navbarScroll' />
                <NavbarCollapse id='navbarScroll'>
                    <Nav className='me-auto my-2 my-lg-0' navbarScroll>
                        {LINKS.map(({ text, to }, key) =>
                            <Link
                                className='nav-link'
                                activeClass='active'
                                to={to}
                                spy={true}
                                offset={-100}
                                key={key}
                            >
                                {text}
                            </Link>
                        )}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar >
    );
}

export default Navigation;