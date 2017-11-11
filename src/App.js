import React from 'react';
import {
  Container
} from 'reactstrap';
import TopNav from './components/TopNav';

class App extends React.Component {
  render() {
    return (
      <Container>
        <TopNav />
        <p></p>
      </Container>
    );
  }
}

export default App;
