import { Container, Anchor } from 'react-bootstrap';

const Project = ({project, id}) => {
    return (
        <div className="p-2 m-3 project" key={id}>
            <p className="title text-primary">{project.title}</p>
            <p className="languages">{project.languages.join(', ')}</p>
            <p className="description">{project.description.length != 0 ? project.description : 'No description found.'}</p>

            <Container>
                <Anchor className="btn col-12 col-xl-6 my-2" href={project.page_url}>Live Demo {">"}</Anchor>
                <Anchor className="btn col-12 col-xl-6 my-2" href={project.github_url}>GitHub {">"}</Anchor>
            </Container>
        </div>
    );
}
export default Project;