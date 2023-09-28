import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
        <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl text-black">daisyUI</a>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl text-slate-400" to='/register'>Register</Link>
            <Link className="btn btn-ghost normal-case text-xl text-slate-400" to='/login'>Log in</Link>
        </div>
        </div>
    )
}

export default Header