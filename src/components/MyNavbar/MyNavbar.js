import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/squad-manager">Squad Manager</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://bobbybaxter.github.io/swgoh-counters">Squad Counters</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.logMeOut}>Logout</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return (
        <Nav className="ml-auto" navbar></Nav>
      );
    };
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">SWGOH Squad Builder</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar(authed)}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
