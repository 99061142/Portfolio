import { Container, Row } from 'react-bootstrap';
import featuredProjects from './featured-projects';
import Project from './project';

function Projects() {
    return (
        <div
            id='projects'
            className='px-3 pt-5'
        >
            <h2 className='text-black'>Projecten</h2>
            <Container>
                <Row className='justify-content-around'>
                    {featuredProjects
                        .filter(project => project.github_url || project.page_url)
                        .map((project, key) =>
                            <Project {...project} key={key} />
                        )
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Projects