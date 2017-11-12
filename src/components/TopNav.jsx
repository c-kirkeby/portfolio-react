import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { HashLink } from 'react-router-hash-link';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="TopNav" light fixed="top" expand="md">
          <NavbarBrand><b>CHRISTIAN</b> KIRKEBY</NavbarBrand>
          <NavbarToggler onClick={this.toggle}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-sm-auto">
              <NavItem>
                <NavLink href="#">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Portfolio">Portfolio</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="#ContactMe">Contact Me</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
