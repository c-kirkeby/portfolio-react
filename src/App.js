import React from 'react';
import TopNav from './components/TopNav';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TopNav />
        <p></p>
      </div>
    );
  }
}

// class TopNav extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }

//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Navbar color="black" light expand="md">
//           <NavbarBrand>Christian Kirkeby</NavbarBrand>
//           <NavbarToggler onClick={this.toggle}></NavbarToggler>
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav navbar>
//               <NavItem>
//                 <NavLink active href="/about-me">About Me</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/portfolio">Portfolio</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/contact-me">Contact Me</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     )
//   }
// }

export default App;
