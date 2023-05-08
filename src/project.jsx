import ProjectButtons from './projectButtons';

function Project(project) {
    return (
        <div
            className='my-3 text-black'
            style={{
                width: 400,
                overflow: 'hidden',
                border: '1px solid #ccc',
                boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)'
            }}
        >
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