import { Container, Row, Col } from 'react-bootstrap';
import Socials from './socials';
import Contacts from './contacts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Footer() {
    const NOW = new Date();
    const YEAR = NOW.getFullYear();
    return (
        <footer className='bg-dark pt-4 px-3 text-white'>
            <Container>
                <Row className='justify-content-end'>
                    <Col
                        xs={12}
                        md={6}
                        lg={3}
                        className='mb-3'
                    >
                        <p className='mb-2'>
                            Socials
                        </p>
                        <Socials
                            anchorClassNames='mx-2'
                            iconClassNames='fa-lg border rounded-circle text-white'
                        />
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        lg={3}
                        className='mb-3'
                    >
                        <p className='mb-2'>
                            Contact
                        </p>
                        <Contacts
                            anchorClassNames='text-decoration-none text-white'
                            iconClassNames='pe-2 text-secondary'
                        />
                    </Col>
                </Row>
            </Container>
            <ul
                className='text-center ps-0'
                style={{ listStyleType: 'none' }}
            >
                <li className='my-2'>
                    <Link
                        to='root'
                        role='button'
                    >
                        <FontAwesomeIcon
                            size='2xl'
                            icon={faChevronUp}
                            bounce
                        />
                    </Link>
                </li>
                <li >
                    <Link
                        to='root'
                        role='button'
                    >
                        BACK TO TOP
                    </Link>
                </li>
            </ul>
            <div className='mx-4 border-top border-2'>
                <div className='py-2 d-flex align-items-center'>
                    <FontAwesomeIcon
                        className='text-white mx-2'
                        icon={faCopyright}
                    />
                    <p className='mb-0'>
                        {YEAR} Xander Briem
                    </p>
                </div>
            </div>
        </footer >
    );
}

export default Footer