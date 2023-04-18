import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSquareJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    const SKILLS = {
        'React': faReact,
        'JS': faSquareJs,
        'Python': faPython,
        'HTML': faHtml5,
        'CSS': faCss3Alt
    };
    return (
        <div id='skills' className='px-3 py-5 text-black'>
            <h2>SKILLS</h2>
            <p className='mx-3'>De skills die ik binnen mijn projecten gebruik</p>
            <Container>
                <Row className='justify-content-around text-center'>
                    {Object.entries(SKILLS).map(([skill, icon], key) =>
                        <Col xs={4} md={3} lg={true} key={key}>
                            <FontAwesomeIcon size='4x' icon={icon} />
                            <p>{skill}</p>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Skills;