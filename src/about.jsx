import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Anchor } from 'react-bootstrap';

export default function About() {
    return (
        <div className="px-3 pt-3 text-white" id="about" style={{paddingBottom:"400px"}}>
            <h1>Xander Briem | <span>Software developer</span></h1>

            <Anchor className="text-white" href="https://www.linkedin.com/in/xander-briem/" target="_blank">
                <FontAwesomeIcon className="fa-brands fa-linkedin fa-xl" style={{padding:'6px'}} icon={faLinkedin} />
            </Anchor>
            <Anchor className="text-white" href="https://github.com/99061142" target="_blank">
                <FontAwesomeIcon className="fa-brands fa-linkedin fa-xl" style={{padding:'6px'}} icon={faGithub} />
            </Anchor>

            <p className="mx-3" style={{width:"60%"}}>Ik hou me bezig met de front en backend kant van websites en games.</p>
        </div>
    );
}