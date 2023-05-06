import ProjectButtons from './projectButtons';

function Project(project) {
    return (
        <div className='p-2 m-3 project text-black'>
            <p className='text-primary'>
                {project.title}
            </p>
            <p>
                {project.skills.join(', ')}
            </p>
            <p style={{ color: project.description ? null : 'red' }}>
                {project.description || 'No description found.'}
            </p>
            <ProjectButtons {...project} />
        </div>
    );
}

export default Project;