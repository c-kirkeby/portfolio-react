import React from 'react';
import {
  Container
} from 'reactstrap';
import TopNav from './components/TopNav';
import Portfolio from './components/Portfolio';
import BottomNav from './components/BottomNav';
import AboutMe from './components/AboutMe';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <TopNav />
        </Container>
        <div className="Banner" id="TopBanner"></div>
        <Container>
          <div className="main">
            <AboutMe />
            <Portfolio />
          </div>
        </Container> 
        <BottomNav />
      </div>
    );
  }
}

export default App;
