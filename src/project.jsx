import { Button, Container } from 'react-bootstrap';

const Project = ({ project }) => {
    return (
        <div className="p-2 m-3 project text-black">
            <p className="title text-primary">{project.title}</p>
            <p className="languages">{project.languages.join(', ')}</p>
            <p className="description">{project.description.length !== 0 ? project.description : 'No description found.'}</p>

            <Container>
                <Button className="text-dark col-12 col-xl-6 my-2" variant={project.page_url ? "primary" : "danger"} href={'/' + project.page_url} disabled={!project.page_url} target="_blank">Live Demo {">"}</Button >
                <Button className="text-dark col-12 col-xl-6 my-2" variant={project.github_url ? "primary" : "danger"} href={project.github_url} disabled={!project.github_url} target="_blank">GitHub {">"}</Button >
            </Container >
        </div >
    );
}
export default Project;