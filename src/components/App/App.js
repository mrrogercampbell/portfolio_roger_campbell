import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BrandStament from '../BrandStatment/BrandStatment'
// import ProjectList from '../ProjectList/ProjectList'
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import '../NavBar/NavBar.css'
import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className='navigation-bar'>
            <ul>
              <li>
                <Link to="#home">Home</Link>
              </li>

              <li>
                <Link to="/projectgallery">Profolio Gallery</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Home />
          <BrandStament id='home' />
          <ProjectGallery />
          <Contact />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
