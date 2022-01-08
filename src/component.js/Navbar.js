import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Navbar() {
    console.log('Navbar==>')
    return (
        <div>
            <nav>
                <ul>
                    {/* <li><Link to="/">Home</Link></li> */}
                    {/* <li><Link to="/about">About</Link></li> */}
                    <li><NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/post/mobile">post</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
