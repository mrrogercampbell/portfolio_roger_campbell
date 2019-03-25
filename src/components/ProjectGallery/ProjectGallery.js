import React, { Component } from 'react';
import { Link } from "react-router-dom";
import project1 from '../../images/Project-1.png'
import project2 from '../../images/Project-2.png'
import project3 from '../../images/Project-3.png'
import './ProjectGallery.css'

class ProjectGallery extends Component {
    constructor() {
        super()
        this.state = {
            img: '',
        }
    }
    render() {
        return (
            <div>
                <div className='cards' >
                    <div>
                        <a href='https://www.rogercampbell.net/project-1-triva-game/'>
                            <img src={project1} />
                            <p><span className='title'>Project Title: Battlestar Galactica Trivia</span></p>
                            <p> This is my project..... Give details.</p>
                            <p>GitHub link</p>
                        </a>
                    </div>
                    <div>
                        <a href='https://spaceonefederation.herokuapp.com/'>
                            <img src={project2} />
                            <p><span className='title'>Project Title: SpaceOne Federation</span></p>
                            <p> This is my project..... Give details.</p>
                        </a>
                    </div>
                    <div>
                        <a href='http://dev-book.surge.sh/'>
                            <img src={project3} />
                            <p><span className='title'>Project Title: DevBook</span></p>
                            <p> This is my project..... Give details.</p>
                        </a>
                    </div>
                    <div>
                        <img src={project3} />
                        <p><span className='title'>Project Title: Scheduler</span></p>
                        <p> This is my project..... Give details.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectGallery;