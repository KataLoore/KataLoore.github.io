import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="site-footer">
            <Link to="/" className="site-footer-logo">Keepsake Knits</Link>
            <div className="site-footer-details">
                <p className="site-footer-item">
                    <Link to="/about" className="site-footer-link">About this website</Link>
                </p>
                <p className="site-footer-item">Get in touch: contact@keepsakeknits.com</p>
            </div>
        </footer>
    )
}

export default Footer