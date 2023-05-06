import { Container, Anchor, Row, Col, Button } from 'react-bootstrap';
import Socials from './socials';
import Contacts from './contacts';

function Footer() {
    const NOW = new Date()
    const YEAR = NOW.getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer className='bg-dark pt-4 px-3'>
            <Container>
                <Row className='justify-content-end'>
                    <Col xs={12} md={6} lg={3} className='mb-3'>
                        <p className='mb-2'>Socials</p>
                        <Socials anchorClassNames='mx-2' iconClassNames='fa-lg border rounded-circle' />
                    </Col>
                    <Col xs={12} md={6} lg={3} className='mb-3'>
                        <p className='mb-2'>Contact</p>
                        <Contacts />
                    </Col>
                </Row>
            </Container>
            <div className='flex-column text-center'>
                <div>
                    <Button
                        variant='text'
                        className='text-decoration-none arrow d-inline-flex align-items-center'
                        onClick={scrollToTop}
                    >
                        <span></span>
                        <span></span>
                    </Button>
                </div>
                <div>
                    <Button
                        variant='text'
                        className='text-decoration-none text-white'
                        onClick={scrollToTop}
                    >
                        BACK TO TOP
                    </Button>
                </div>
            </div>
            <div className='mx-4 mt-3 border-top border-2'>
                <p className='m-2'>@ {YEAR} Xander Briem</p>
            </div>
        </footer>
    );
}

export default Footer