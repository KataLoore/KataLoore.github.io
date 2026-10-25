import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="site-footer">
            <Link to="/" className="site-footer-logo">Keepsake Knits</Link>
            <p className="site-footer-item">
                <Link to="/about" className="site-footer-link">About</Link>
            </p>
            <p className="site-footer-item">E-mail: contact@keepsakeknits.com</p>
        </footer>
    )
}

export default Footer
