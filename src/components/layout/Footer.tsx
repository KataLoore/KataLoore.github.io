import './Footer.css'
import { Link } from 'react-router-dom'
import type { MouseEvent } from 'react'

const Footer = () => {
    const handleAboutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

    return (
        <footer className="site-footer">
            <Link to="/" className="site-footer-logo">Keepsake Knits</Link>
            <div className="site-footer-details">
                <p className="site-footer-item">
                    <Link to="/about" className="site-footer-link" onClick={handleAboutClick}>
                        About this website
                    </Link>
                </p>
                <p className="site-footer-item">Get in touch: contact@keepsakeknits.com</p>
            </div>
        </footer>
    )
}

export default Footer
