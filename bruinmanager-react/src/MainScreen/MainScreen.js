import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import TabButton from '../Components/TabButton';
import Summary from './SummaryTab/Summary';
import Calendar from './CalendarTab/Calendar';

const SummaryScreen = () => (
	<Summary weekNumber={6}/>
)

const CalendarScreen = () => {
  return (
    <Calendar />
  )
}

const ButtonLinkDashboard = () => {
  return (
    <button>
      <Link to="/dashboard">Dashboard</Link>
    </button>
  )
}

const ButtonLinkCalendar = () => {
  return(
    <button>
      <Link to="/calendar">Calendar</Link>
    </button>
  )
}

export default class MainScreen extends React.Component {
	render() {
		return (
			//<TabButton onClick={this.props.onClick} tabName="Summary"/>
      <Router>
      <div>
        <div style={styles.overview}>
          <h1 style={styles.navItems}>Hello, {this.props.firstName}</h1>
          <ButtonLinkDashboard style={styles.navItems} />
          <ButtonLinkCalendar style={styles.navItems} />
        </div>
          <Switch>
            <Route path="/calendar" component={CalendarScreen} />
            <Route path="/dashboard" component={SummaryScreen}/>
          </Switch>
      </div>
      </Router>
		);
	}
}

let styles = {
  navItems: {
    display: "inline-block",
  },
  overview: {
    marginLeft: 50,
    marginRight: 50,
  }
}
// <Route exact path="/summary" component={SummaryScreen} />
/*
<Router>
  <div>
    <ul>
      <li><Link to="/summary">Summary</Link></li>
      <li><Link to="/calendar">Calendar</Link></li>
      <li><Link to="/newsfeed">Newsfeed</Link></li>
      <li><Link to="/dining">Dining</Link></li>
    </ul>

    <Route path="/summary" component={SummaryScreen}/>
  </div>
</Router>
*/
