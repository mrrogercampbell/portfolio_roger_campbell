import React, { Component } from 'react';
// import MockUp from "../MockUp/MockUp"
import './ProjectList.css'
// import '../MockUp/MockUp.css'
import img from '/Users/roger/Freelance/portfolio_roger_campbell/src/images/GA_02_-83.jpg'

class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectOne: 'GA_02_-83',
            projectTwo: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1014&q=80',
            projectThree: '',
            projectFour: '',
        }
        this.mouseOver = this.mouseOver.bind(this)
    }
    mouseOver(evt) {
        this.setState({ projectOne: evt.target.name })
        console.log(this.state.projectName)
        console.log(this.state)
        console.log('MouseOver Ran!')
    }
    render() {
        return (
            <div className='project-list'>
                <ul>
                    {/* how to setState with onMouseEnter?? */}
                    <li className='project-name' onMouseEnter={this.mouseOver} name='download'>Project 1</li>
                    <li className='project-name'>Project 2</li>
                    <li className='project-name'>Project 3</li>
                    <li className='project-name'>Project 4</li>
                    <li className='project-name'>Project 5</li>
                </ul>
                {/* <img className='project-img' src={this.state.projectOne} alt='image' /> */}

                <img className='project-img' src={require(`/Users/roger/Freelance/portfolio_roger_campbell/src/images/${this.state.projectOne}.jpg`)} alt='image' />
                {/* <img className='project-img' src={this.state.projectTwo} alt='image' />
                <img className='project-img' src={img} alt='image' /> */}
                {/* <div className='mockup-div'>
                    <MockUp props={this.state} />
                </div> */}
            </div>
        );
    }
}

export default ProjectList;