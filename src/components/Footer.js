import React from 'react'
import '../styles/Footer/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__icons">
                <FontAwesomeIcon icon={ faInstagramSquare } />
            </div>
            <div className="footer__menu">
            </div>
        </div>
    )
}

export default Footer
