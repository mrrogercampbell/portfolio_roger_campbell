import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div className='navigation-bar'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to=""></Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;