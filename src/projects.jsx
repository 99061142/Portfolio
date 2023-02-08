import { featuredProjects } from "./featured-projects";
import Project from './project'

function Projects() {
    return (
        <div id="projects" className="px-3 py-5">
            <h2 className="text-black">Projecten</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {featuredProjects
                .filter(dict => dict.github_url || dict.page_url)
                .map((project) => {
                    return (
                        <Project project={project} key={project.id} id={project.id} />
                    )
                })}
            </div>
        </div>
    );
}

export default Projects