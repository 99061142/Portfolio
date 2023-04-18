import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Container, Anchor, Row, Col, Button } from 'react-bootstrap';

function Footer() {
    const TODAY = new Date()
    const YEAR = TODAY.getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <footer className="bg-dark pt-4 px-3" >
            <Container>
                <Row className="justify-content-end">
                    <Col className="col-12 col-md-6 col-lg-3 mb-3">
                        <p className="mb-2">Socials</p>
                        <Anchor className="mx-2" href="https://www.linkedin.com/in/xander-briem/" target="_blank">
                            <FontAwesomeIcon className="fa-lg border rounded-circle" style={{ padding: '6px' }} icon={faLinkedin} />
                        </Anchor>
                        <Anchor className="mx-2" href="https://github.com/99061142" target="_blank">
                            <FontAwesomeIcon className="fa-lg border rounded-circle" style={{ padding: '6px' }} icon={faGithub} />
                        </Anchor>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-3 mb-3">
                        <p className="mb-2">Contact</p>
                        <strong className="d-inline-block ms-2 me-1 text-muted">E</strong>
                        <Anchor className="text-decoration-none" href="mailto:xanderbwerk@gmail.com">xanderbwerk@gmail.com</Anchor>
                    </Col>
                </Row>
            </Container>
            <div className="flex-column text-center">
                <div>
                    <Button
                        variant="text"
                        className="text-decoration-none arrow d-inline-flex align-items-center"
                        onClick={() => scrollToTop()}
                    >
                        <span></span>
                        <span></span>
                    </Button>
                </div>
                <div>
                    <Button
                        variant="text"
                        className="text-decoration-none text-white"
                        onClick={() => scrollToTop()}
                    >
                        BACK TO TOP
                    </Button>
                </div>
            </div>
            <div className="mx-4 mt-3 border-top border-2">
                <p className="m-2">@ {YEAR} Xander Briem</p>
            </div>
        </footer>
    );
}

export default Footer