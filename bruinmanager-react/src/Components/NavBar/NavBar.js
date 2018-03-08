import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import TabButton from '../TabButton/TabButton.js';

const ButtonLinkDashboard = () => {
  return (
    <NavLink to="/dashboard" style={styles.highlightedButton} activeStyle={styles.activeHighlightedButton}>
      Dashboard
    </NavLink>
  )
}

const ButtonLinkCalendar = () => {
  return(
    <NavLink to="/calendar" style={styles.highlightedButton} activeStyle={styles.activeHighlightedButton}>
      Calendar
    </NavLink>
  )
}

const ButtonLinkSettings = () => {
  return(
    <NavLink to="/settings" style={styles.highlightedButton} activeStyle={styles.activeHighlightedButton}>
      Settings
    </NavLink>
  )
}

const ButtonLinkHelp = () => {
  return(
    <NavLink to="/help" style={styles.highlightedButton} activeStyle={styles.activeHighlightedButton}>
      Help
    </NavLink>
  )
}

export default class NavBar extends React.Component {
    render() {
        return(
            <div style={styles.navButtons}>
                <div>
                    <ButtonLinkDashboard style={styles.navItems}/>
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

let styles = {
  activeHighlightedButton: {
    backgroundColor: '#DBDBDB',
  },
  highlightedButton: {
    color: '#000000',
    borderRadius: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: "Roboto",
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  navItems: {

  }
}
