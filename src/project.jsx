const Project = ({project, id}) => {
    return (
        <div className="p-2 m-3 project" key={id}>
            <p className="title text-primary">{project.title}</p>
            <p className="languages">{project.languages.join(', ')}</p>
            <p className="description">{project.description.length != 0 ? project.description : 'No description found.'}</p>
            
            <div className="container">
                <div className="row">
                    <a className="btn col-12 col-xl-6 my-2" href={project.page_url} target="_blank">
                        Live Demo {">"}
                    </a>
                    <a className="btn col-12 col-xl-6 my-2" href={project.github_url} target="_blank">
                        GitHub {">"}
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Project;