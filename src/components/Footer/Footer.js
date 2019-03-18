import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer-div'>
                <p>Linkedin Logo Here</p>
                <p>GitHub Logo Here</p>
                <p>Dev.to Logo Here</p>
                © {new Date().getFullYear()}
            </div>
        );
    }
}

export default Footer;