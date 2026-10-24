import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
    <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="navbar-logo">Keepsake Knits</Link>
        <div className="navbar-menu">
            <button className="navbar-button">...</button>
        </div>
    </nav>
    )
}

export default Navbar