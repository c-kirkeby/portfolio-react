import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
// import aboutMeImage from './images/about-me.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <MyNav />
    );
  }
}

class MyNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <Navbar color="">
          <NavbarHeader>
            <a class="navbar-brand">Christian Kirkeby</a>
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapse-nav">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            </NavbarHeader>
            <div class="navbar-collapse collapse" id="collapse-nav">
              <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#about-me">About Me</a></li>
                <li><a href="#link-portfolio">Portfolio</a></li>
                <li><a href="#link-contact-me">Contact Me</a></li>
              </ul>
            </div>
        </Navbar>
      </div>
    )
  }
}

export default App;
