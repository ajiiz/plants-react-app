import React from 'react'
import '../styles/Footer/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    const styles = {
        color: 'rgba(45, 56, 26, 0.849)'
    }

    const getYear = (year) => {
        year = new Date().getFullYear()
        return year
    }

    return (
        <footer>
            <div className="contact">
                <div className="contact__icons">
                    <div className="contact__icons__text">
                        <h3>contact me</h3>
                        <hr className="divider"></hr>
                    </div>
                    <div className="contact__icons__link">
                        <div className="contact__icons__link__icon">
                            <FontAwesomeIcon style={styles} icon={ faInstagramSquare } size="lg" />
                        </div>
                        <div className="contact__icons__link__text">
                            <a href="https://www.instagram.com/pvvrbl/" target="_blank" rel="noopener">DM me on Instagram.</a>
                        </div>
                    </div>
                    <div className="contact__icons__link">
                        <div className="contact__icons__link__icon">
                            <FontAwesomeIcon style={styles} icon={ faGithubSquare } size="lg" />
                        </div>
                        <div className="contact__icons__link__text">
                            <a href="https://github.com/ajiiz" target="_blank" rel="noopener">Check my GitHub.</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h3 className="copyright__text">Copyright &copy; {getYear()}, Wrobel Piotr </h3>
            </div>
        </footer>
    )
}

export default Footer
