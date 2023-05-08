import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Anchor } from 'react-bootstrap';

function Socials({ anchorClassNames, iconClassNames }) {
    const SOCIALS = [
        {
            'href': 'https://www.linkedin.com/in/xander-briem/',
            'icon': faLinkedin
        },
        {
            'href': 'https://github.com/99061142',
            'icon': faGithub,
        }
    ];
    return (
        SOCIALS.map(({ href, icon }, key) =>
            <Anchor
                className={anchorClassNames || null}
                href={href}
                target='_blank'
                key={key}
            >
                <FontAwesomeIcon
                    className={iconClassNames || null}
                    style={{ padding: '6px' }}
                    icon={icon}
                />
            </Anchor>
        )
    );
}

export default Socials