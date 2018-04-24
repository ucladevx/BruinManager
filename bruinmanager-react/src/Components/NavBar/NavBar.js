import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import { Image, Button, Dropdown, Menu } from 'semantic-ui-react'

import './NavBar.scss';

const ButtonLinkDashboard = () => {
  return (
    <NavLink to="/dashboard" className="highlighted-button" activeClassName="active-highlighted-button">
      Dashboard
    </NavLink>
  )
}

const ButtonLinkCalendar = () => {
  return(
    <NavLink to="/calendar" className="highlighted-button" activeClassName="active-highlighted-button">
      Calendar
    </NavLink>
  )
}

const ButtonLinkSettings = () => {
  return(
    <NavLink to="/settings" className="highlighted-button" activeClassName="active-highlighted-button">
      Settings
    </NavLink>
  )
}

const ButtonLinkHelp = () => {
  return(
    <NavLink to="/help" className="highlighted-button" activeClassName="active-highlighted-button">
      Help
    </NavLink>
  )
}
export default class NavBar extends React.Component {
     state = { activeItem: 'dashboard' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

    return(
     <Menu inverted secondary>
     <Menu.Menu position='left'>
        <Menu.Item>
            <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}><ButtonLinkDashboard className="nav-items"/></Menu.Item>
            <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}><ButtonLinkCalendar/></Menu.Item>
         </Menu.Item>
    </Menu.Menu>
        <Menu.Menu position='right'>
            <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick}> <ButtonLinkSettings/></Menu.Item>
            <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}><ButtonLinkHelp/></Menu.Item>
    </Menu.Menu>
      </Menu>
        );
    }
}

/*
Remove bruinhub
 <Menu.Item > <Image centered src='/temp-logo.png' />
                    <p style={{paddingLeft:'.2em',fontWeight:'bold'}}> BruinHub</p>  </Menu.Item>
            <Menu.Item > {this.props.name} </Menu.Item>
*/