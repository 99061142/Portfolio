import { Anchor } from "react-bootstrap"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Contacts() {
    const CONTACTS = [
        {
            icon: faEnvelope,
            href: 'mailto:xanderbwerk@gmail.com',
            anchorText: 'xanderbwerk@gmail.com'
        }
    ];
    return (
        CONTACTS.map(({ href, icon, anchorText }, key) =>
            <div className='ms-2 d-flex align-items-center' key={key}>
                <FontAwesomeIcon
                    className='pe-2 text-white'
                    icon={icon}
                />
                <Anchor
                    className='text-decoration-none'
                    href={href}
                >
                    {anchorText}
                </Anchor>
            </div>
        ))
}

export default Contacts