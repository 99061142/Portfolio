import { featuredProjects } from "./featured-projects";
import Project from './project'

export default function Projects() {
    return (
        <div id="projects" className="p-3">
            <div>
                <h2 className="text-left">Projecten</h2>
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
        </div>
    );
}