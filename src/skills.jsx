import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'

export default function Skills() {
    return (
        <div id="skills" className="p-3">
            <h2 className="text-left">TALEN</h2>

            <p className="mx-3">De skills die ik binnen mijn projecten gebruik</p>
            <div className="container mx-auto">
                <div className="row justify-content-around text-center">
                    <div className="col-6 col-md-3 col-lg-2 my-3">
                        <FontAwesomeIcon className="display-4 text-dark" icon={faHtml5} />
                        <span className="d-block text-dark">HTML</span>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 my-3">
                        <FontAwesomeIcon className="display-4 text-dark" icon={faCss3Alt} />
                        <span className="text-dark d-block ">CSS</span>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 my-3">
                        <FontAwesomeIcon className="display-4 text-dark" icon={faSquareJs} />
                        <span className="text-dark d-block">JS</span>
                    </div>

                    <div className="col-6 col-md-3 col-lg-2 my-3">
                        <FontAwesomeIcon className="display-4 text-dark" icon={faPython} />
                        <span className="text-dark d-block">Python</span>
                    </div>
                </div> 
            </div>
        </div>
    );
}
