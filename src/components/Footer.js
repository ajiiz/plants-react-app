import React from 'react'
import '../styles/Footer/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/fontawesome-free-regular'

const Footer = () => {

    const styles = {
        color: 'rgba(45, 56, 26, 0.849)'
    }

    return (
        <footer>
            <div className="contact">
                <div className="contact__icons">
                    <div className="contact__text"><h3>Contact Me</h3></div>
                    <div className="contact__icons__link">
                        <FontAwesomeIcon style={styles} icon={ faInstagramSquare } size="lg" />
                        <div className="contact__icons__link__text">DM me on Instagram.</div>
                    </div>
                    <div className="contact__icons__link">
                        <FontAwesomeIcon style={styles} icon={ faFacebookSquare } size="lg" />
                        <div className="contact__icons__link__text">Add me on Facebook.</div>
                    </div>
                    <div className="contact__icons__link">
                        <FontAwesomeIcon style={styles} icon={ faGithub } size="lg" />
                        <div className="contact__icons__link__text">Check my GitHub.</div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h3>Made by Piotr Wrobel 2020</h3>
            </div>
        </footer>
    )
}

export default Footer
