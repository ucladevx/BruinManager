import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar.js'
import Summary from './SummaryTab/Summary';
import Calendar from './CalendarTab/Calendar';

const SummaryScreen = () => (
	  <Summary weekNumber={8}/>
)

const CalendarScreen = () => {
  return (
    <Calendar />
  )
}

const SettingsScreen = () => {
  return (
    <Calendar />
  )
}

const HelpScreen = () => {
  return (
    <Calendar />
  )
}

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isActiveDashboard: true};
    }

    render() {
        return (
            <Router>
                <div style={styles.boxWrapper}>
                    <div style={styles.leftOfNavBar}>
                        <h2>Hello,{'\u00A0'}{this.props.firstName}!</h2>
                    </div>
                    <div style={styles.navBarBox}>
                        <NavBar />
                    </div>
                    <div style={styles.currentTab}>
                        <Switch>
                            <Route path="/calendar" component={CalendarScreen} />
                            <Route path="/dashboard" component={SummaryScreen}/>
                            <Route path="/settings" component={SettingsScreen}/>
                            <Route path="/help" component={HelpScreen}/>
                        </Switch>
                    </div>
                </div>
            </Router>
		);
	}
}

let styles = {
    boxWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(24, 1fr)",
        gridTemplateRows: "60px auto",
        height: "auto",
        width: "auto",
    },
    leftOfNavBar: {
        gridRow: "1 / 2",
        gridColumn: "3 / 7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    navBarBox: {
        gridRow: "1 / 2",
        gridColumn: "7 / 23",
    },
    currentTab: {
        gridRow: "2 / 3",
        gridColumn: "3 / 23",
        height: "80%",
    },
}
