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

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      // links: [
      //   {
      //     active: true
      //   },
      //   {
      //     active: false
      //   }
      // ]
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // handleClick() {
  //   this.preventDefault(e);
  //   this.setState({
  //     this.state.links.map((link) => {

  //     });
  //   });
  // }

  render() {
    return (
      <Container>
        <Navbar className="TopNav" light fixed="top" expand="md">
          <NavbarBrand><b>CHRISTIAN</b> KIRKEBY</NavbarBrand>
          <NavbarToggler onClick={this.toggle}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-sm-auto">
              <NavItem>
                <NavLink href="#TopBanner" active={true}>About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Portfolio" active={false}>Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    )
  }
}
