import Socials from './socials';

function About() {
    return (
        <div className='ps-3 pt-3 pb-5 text-black' id='about'>
            <h1>
                Xander Briem | <span>Software developer</span>
            </h1>
            <Socials anchorClassNames='text-black' iconClassNames='fa-xl' />
            <p className='mx-3' style={{ width: '60%' }}>
                Ik hou me bezig met de front en backend kant van websites en games.
            </p>
        </div>
    );
}

export default About;