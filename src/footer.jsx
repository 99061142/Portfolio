import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    const TODAY = new Date()
    const YEAR = TODAY.getFullYear();

    return (
        <footer className="mx-auto w-100 w-100 bg-dark pt-4">     
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <p className="m-0 mb-2 text-left">Socials</p>
                        <div className="d-flex justify-content-start">
                            <a className="mx-2" href="https://www.linkedin.com/in/xander-briem/" target="_blank">
                                <FontAwesomeIcon className="fa-brands fa-linkedin fa-lg border rounded-circle" style={{padding:'6px'}} icon={faLinkedin} />
                            </a>
                            <a className="mx-2" href="https://github.com/99061142" target="_blank">
                                <FontAwesomeIcon className="fa-brands fa-linkedin fa-lg border rounded-circle" style={{padding:'6px'}} icon={faGithub} />
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <p className="m-0 mb-2">Contact</p>
                        <div className="mx-2">      
                            <strong className="text-muted">E </strong>
                            <a className="text-decoration-none" href="mailto:xanderbwerk@gmail.com">xanderbwerk@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <a className="text-decoration-none arrow" href="/">
                <span></span>
                <span></span>
            </a>
            <div className="text-center mb-3">
                <a className="text-decoration-none" href="/">BACK TO TOP</a>
            </div>

            <div className="mx-5 border-top border-2 py-2">
                <p className="m-0">@ {YEAR} Xander Briem</p>
            </div>
        </footer>
    );
}