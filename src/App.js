import React from 'react';
import {
  Container
} from 'reactstrap';
import Header from './components/Header';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Container>
          <div className="main">
            <AboutMe />
            <Portfolio />
          </div>
        </Container> 
        <Footer />
      </div>
    );
  }
}

export default App;
