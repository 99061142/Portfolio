import { Button, Col, Container, Row } from 'react-bootstrap';

function Project({ title, languages, description, page_url, github_url, frameworks }) {
    return (
        <div className="p-2 m-3 project text-black" >
            <p className="text-primary">
                {title}
            </p>
            {frameworks &&
                <p className={languages ? 'mb-2' : null}>
                    {frameworks.join(', ')}
                </p>
            }
            {languages &&
                <p>
                    {languages.join(', ')}
                </p>
            }
            <p style={{ color: description ? null : 'red' }}>
                {description || 'No information found.'}
            </p>
            <Container>
                <Row>
                    <Col xs={12} xl={6}>
                        <Button
                            className="text-dark my-2 w-100"
                            variant={page_url ? 'primary' : 'danger'}
                            href={page_url}
                            disabled={!page_url}
                            style={{ cursor: page_url ? null : 'not-allowed' }}
                            target="_blank"
                        >
                            Live Demo {">"}
                        </Button>
                    </Col>
                    <Col xs={12} xl={6}>
                        <Button
                            className="text-dark my-2 w-100"
                            variant={github_url ? 'primary' : 'danger'}
                            href={github_url}
                            disabled={!github_url}
                            style={{ cursor: github_url ? null : 'not-allowed' }}
                            target="_blank"
                        >
                            GitHub {">"}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}
export default Project;