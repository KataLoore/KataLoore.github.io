import { useEffect, useId, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import MenuButton from '../ui/MenuButton'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuId = useId()
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isOpen) return

        const handleOutsideClick = (event: PointerEvent) => {
            if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('pointerdown', handleOutsideClick)
        return () => document.removeEventListener('pointerdown', handleOutsideClick)
    }, [isOpen])

    const handleAboutClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
            setIsOpen(false)
            menuRef.current?.querySelector('button')?.focus()
            window.scrollTo({ top: 0, behavior: 'instant' })
        }
    }

    return (
    <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="navbar-logo">Keepsake Knits</Link>
        <div
            className="navbar-menu"
            ref={menuRef}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
            }}
            onKeyDown={(event) => {
                if (event.key === 'Escape' && isOpen) {
                    event.preventDefault()
                    setIsOpen(false)
                    menuRef.current?.querySelector('button')?.focus()
                }
            }}
        >
            <MenuButton
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={() => setIsOpen(!isOpen)}
            />
            <ul className="navbar-dropdown" id={menuId} hidden={!isOpen}>
                <li>
                    <Link to="/about" onClick={handleAboutClick}>About</Link>
                </li>
                <li>
                    <span className="navbar-placeholder" aria-disabled="true">
                        Knitting tools
                        <span className="navbar-coming-later">Coming later</span>
                    </span>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar
