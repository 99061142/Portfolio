import { Button, Col, Container, Row } from 'react-bootstrap';

function ProjectButtons(project) {
    return (
        <Container>
            <Row>
                {Object.entries(project)
                    .filter(([key, value]) => key.includes('url') && value !== null)
                    .map(([urlType, url], key) =>
                        <Col
                            xs={12}
                            xl={true}
                            key={key}
                        >
                            <Button
                                style={{ boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)' }}
                                className='text-dark my-2 w-100'
                                variant='primary'
                                href={url}
                                target='_blank'
                            >
                                {urlType.includes('github') ? 'Github >' : 'Live Demo >'}
                            </Button>
                        </Col>
                    )}
            </Row>
        </Container>
    );
}

export default ProjectButtons