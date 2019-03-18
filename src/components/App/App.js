import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import BrandStament from '../BrandStatment/BrandStatment'
import ProjectList from '../ProjectList/ProjectList'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <main>
          <BrandStament />
          <ProjectList />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
