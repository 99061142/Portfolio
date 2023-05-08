import Socials from './socials';

function About() {
    return (
        <div
            id='about'
            className='px-3 pt-3 pb-1 text-black'
        >
            <h1>
                Xander Briem | <span
                    style={{ background: 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 0, 1) 50%, rgba(255, 255, 0, 1) 30%)' }}
                >
                    Software developer
                </span>
            </h1>
            <Socials
                anchorClassNames='text-black'
                iconClassNames='fa-xl'
            />
            <p
                className='mx-3'
                style={{ width: '60%' }}
            >
                Ik hou me bezig met de front en backend kant van websites en games.
            </p>
        </div >
    );
}

export default About;