
import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


export default class TopBar extends React.Component {

  static propTypes = {
    goTo: React.PropTypes.func,
  }

  static defaultProps = {
    goTo: '',
    logout: '',
    loggedIn: false,
    user: {},
    router: {},

  }

  buildNav() {
    var { loggedIn, goTo, logout, router } = this.props;
    if(!loggedIn){
      return '';
    }
    return (
      <Navbar.Collapse>
        <Nav>
          <NavItem href="#" onClick={$ => { goTo(router.uploadYML) }}>Upload YML</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href="#" onClick={ logout }>Log out</NavItem>
        </Nav>
      </Navbar.Collapse>);
  }

  render() {
    var { goTo, router } = this.props;
    var nav = this.buildNav();

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" onClick={$ => { goTo(router.translations) }}>Translations</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        {nav}
      </Navbar>
      );
  }
}
