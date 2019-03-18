import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav className='navigation-bar'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="">Profolio Gallery</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;