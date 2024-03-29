import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSquareJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    const SKILLS = [
        {
            skill: 'React',
            icon: faReact
        },
        {
            skill: 'JS',
            icon: faSquareJs
        },
        {
            skill: 'Python',
            icon: faPython
        },
        {
            skill: 'HTML',
            icon: faHtml5
        },
        {
            skill: 'CSS',
            icon: faCss3Alt
        }
    ];
    return (
        <div
            id='skills'
            className='px-3 pt-5 text-black'
        >
            <h2>
                SKILLS
            </h2>
            <p className='my-3'>
                De skills die ik binnen mijn projecten gebruik
            </p>
            <Container>
                <Row className='justify-content-around text-center'>
                    {SKILLS.map(({ skill, icon }, key) =>
                        <Col
                            className='my-2'
                            xs={4}
                            md={3}
                            lg={true}
                            key={key}
                        >
                            <FontAwesomeIcon
                                size='4x'
                                icon={icon}
                            />
                            <p className='mb-0'>
                                {skill}
                            </p>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Skills;