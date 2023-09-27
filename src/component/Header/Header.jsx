import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <NavLink to="/" className="btn btn-ghost normal-case text-xl p-3">Home</NavLink>
                <NavLink to="about" className="btn btn-ghost normal-case text-xl p-3">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default Header