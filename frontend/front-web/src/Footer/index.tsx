import './styles.css'
import { ReactComponent as YoutubeIcon} from './youtube.svg'
import { ReactComponent as LinkedinIcon} from './linkedin.svg'
import { ReactComponent as IntagramIcon} from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="" target="_new">
                    <IntagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;