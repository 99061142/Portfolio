import { Anchor } from "react-bootstrap"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Contacts({ anchorClassNames, iconClassNames }) {
    const CONTACTS = [
        {
            icon: faEnvelope,
            href: 'mailto:xanderbwerk@gmail.com',
            anchorText: 'xanderbwerk@gmail.com'
        }
    ];
    return (
        CONTACTS.map(({ href, icon, anchorText }, key) =>
            <div
                className='ms-2 d-flex align-items-center'
                key={key}
            >
                <FontAwesomeIcon
                    className={iconClassNames || null}
                    icon={icon}
                />
                <Anchor
                    className={anchorClassNames || null}
                    href={href}
                >
                    {anchorText}
                </Anchor>
            </div>
        )
    );
}

export default Contacts