import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import BrandStament from '../BrandStatment/BrandStatment'
// import ProjectList from '../ProjectList/ProjectList'
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery'
import Footer from '../Footer/Footer'

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
                <Link to="">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>

            <Route exact path='/' render={routerProps => <BrandStament {...routerProps} />} />

            <Route exact path='/projectgallery' render={routerProps => <ProjectGallery {...routerProps} />}
            />

            {/* <Route>
              <ProjectGallery />

            </Route> */}
            {/* <ProjectList /> */}
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
