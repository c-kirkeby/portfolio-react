import React from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.state = {
      isOpen: false,
      activeLink: 0
    };
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleActive(link) {
    if (this.state.activeLink !== link) {
      this.setState({
        activeLink: link
      });
    }
  }

  render() {
    return (
      <Container>
          <Navbar className="Header" light fixed="top" expand="md">
            <NavbarBrand><b>CHRISTIAN</b> KIRKEBY</NavbarBrand>
            <NavbarToggler onClick={this.toggleMenu}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="ml-sm-auto">
                <NavItem>
                <NavLink href="#Banner" onClick={() => {this.toggleActive(0)}} active={this.state.activeLink === 0 ? true : false}>About Me</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#Portfolio" onClick={() => {this.toggleActive(1) }} active={this.state.activeLink === 1 ? true : false}>Portfolio</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      </Container>
    )
  }
}
