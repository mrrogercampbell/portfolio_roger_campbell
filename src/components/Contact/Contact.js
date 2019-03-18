import React, { Component } from 'react';
import CodePen from '../../images/codepen_logo_vextor-1.png'
import Linkedin from '../../images/linkedin_logo-2C-75px.png'
import GitHub from '../../images/Octocat.png'
import GA from '../../images/GA_logo.png'
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <p>954.242.9917</p>
                <p>Rc1336@gmail.com</p>
                <div className='logos'>
                    <a href='https://www.linkedin.com/in/roger-campbell-ii/'>
                        <img src={Linkedin} />
                        <p>Linkedin Profile</p>
                    </a>
                    <a href='https://codepen.io/rc1336/'>
                        <img src={CodePen} alt='CodePen Logo' />
                        <p>CodePen Profile</p>
                    </a>
                    <a href='http://profiles.generalassemb.ly/roger-campbell-ii'>
                        <img src={GitHub} alt='GitHub Logo' />
                        <p>GitHub Profile</p>
                    </a>
                    <a href='http://profiles.generalassemb.ly/roger-campbell-ii'>
                        <img src={GA} alt='General Assembly Logo' />
                        <p>General Assembly Profile</p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;