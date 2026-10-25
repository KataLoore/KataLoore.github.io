import type { ComponentPropsWithoutRef } from 'react'
import './MenuButton.css'

type MenuButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'children'>

const MenuButton = ({ className, ...props }: MenuButtonProps) => {
    return (
        <button
            type="button"
            aria-label="Navigation menu"
            {...props}
            className={['menu-button', className].filter(Boolean).join(' ')}
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
            </svg>
        </button>
    )
}

export default MenuButton
