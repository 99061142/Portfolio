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
    )
}

export default ProjectButtons