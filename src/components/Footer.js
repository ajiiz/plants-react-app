import React from 'react'
import '../styles/Footer/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    const styles = {
        color: 'rgba(45, 56, 26, 0.849)'
    }

    return (
        <div className="footer">
            <div className="footer__icons">
                <FontAwesomeIcon style={styles} icon={ faInstagramSquare } />
                <FontAwesomeIcon style={styles} icon={ faFacebookSquare } />
                <FontAwesomeIcon style={styles} icon={ faGithubSquare } />
            </div>
            <div className="footer__menu">
            </div>
        </div>
    )
}

export default Footer
