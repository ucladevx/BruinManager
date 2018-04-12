import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import TabButton from '../TabButton/TabButton.js';
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
    render() {
        return(
            <div className="navBar-style-wrapper">
                <div>
                    <ButtonLinkDashboard/>
                    <ButtonLinkCalendar/>
                </div>
                <div>
                    <ButtonLinkSettings/>
                    <ButtonLinkHelp/>
                </div>
            </div>
        );
    }
}