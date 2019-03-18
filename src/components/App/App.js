import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import BrandStament from '../BrandStatment/BrandStatment'
// import ProjectList from '../ProjectList/ProjectList'
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import '../NavBar/NavBar.css'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className='navigation-bar'>
            <ul>
              <li>
                <Link to="/">Home</Link>
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
          <Switch>

            <Route exact path='/' render={routerProps => <BrandStament {...routerProps} />} />

            <Route exact path='/projectgallery' render={routerProps => <ProjectGallery {...routerProps} />}
            />

            <Route exact path='/contact' render={routerProps => <Contact {...routerProps} />}
            />

          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
