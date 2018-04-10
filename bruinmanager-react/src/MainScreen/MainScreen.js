import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import './MainScreen.scss';
import NavBar from '../Components/NavBar/NavBar.js'
import Summary from './SummaryTab/Summary';
import Calendar from './CalendarTab/Calendar';

const SummaryScreen = () => (
	  <Summary weekNumber={10}/>
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
        this.state = {
          isActiveDashboard: true,
          fbdata: this.props.fbdata
        };
    }

    render() {
        return (
            <Router>
                <div class="box-wrapper">
                    <div class="left-of-nav-bar">
                        <h2>Hello,{'\u00A0'}{this.props.fbdata ? this.props.fbdata.name.split(" ")[0] : ""}!</h2>
                    </div>
                    <div class="nav-bar-box">
                        <NavBar />
                    </div>
                    <div class="current-tab">
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