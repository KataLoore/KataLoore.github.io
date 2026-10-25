import { Link } from 'react-router-dom'
import MenuButton from '../ui/MenuButton'
import './Navbar.css'

const Navbar = () => {
    return (
    <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="navbar-logo">Keepsake Knits</Link>
        <div className="navbar-menu">
            <MenuButton />
        </div>
    </nav>
    )
}

export default Navbar
