import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar.js'
import Footer from '../Components/Footer/footer.js'
import Summary from './SummaryTab/Summary';
import Calendar from './CalendarTab/Calendar';
import './MainScreen.scss';

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
        let name = "Hello,"+'\u00A0'+(this.props.fbdata ? this.props.fbdata.name.split(" ")[0] : "")+"!"
        return (
            <Router >
            <div className="mainScreen-style-wrapper">
                <div className="mainScreen-wrapper">
                   <NavBar name={name}/>
                    <div className="current-tab">
                        <Switch>
                            <Route path="/calendar" component={CalendarScreen} />
                            <Route path="/dashboard" component={SummaryScreen}/>
                            <Route path="/settings" component={SettingsScreen}/>
                            <Route path="/help" component={HelpScreen}/>
                        </Switch>
                    </div>
                    <Footer/>
                    </div>
                </div>
            </Router>
		);
	}
}