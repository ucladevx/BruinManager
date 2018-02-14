import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
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

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActiveDashboard: true};
  }

//<TabButton onClick={this.props.onClick} tabName="Summary"/>
render() {
    return (
        <Router>
            <Container fluid>
                <Row style={styles.overview}>
                    <Col>
                        <h1 style={styles.navItems}>Hello, {this.props.firstName}!</h1>
                    </Col>
                    <Col style={{display:"flex",justifyContent:"center",marginBottom: 8,}}>
                        <div style={styles.navButtons}>
                            <ButtonLinkDashboard style={styles.navItems} />
                            <ButtonLinkCalendar style={styles.navItems} />
                            <ButtonLinkSettings style={styles.navItems} />
                            <ButtonLinkHelp style={styles.navItems} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch>
                          <Route path="/calendar" component={CalendarScreen} />
                          <Route path="/dashboard" component={SummaryScreen}/>
                          <Route path="/settings" component={SettingsScreen}/>
                          <Route path="/help" component={HelpScreen}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
      </Router>
		);
	}
}
/*
<Router>
    <div>
      <div style={styles.overview}>
        <h1 style={styles.navItems}>Hello, {this.props.firstName}!</h1>
        <div style={styles.navButtons}>
          <ButtonLinkDashboard style={styles.navItems} />
          <ButtonLinkCalendar style={styles.navItems} />
          <ButtonLinkSettings style={styles.navItems} />
          <ButtonLinkHelp style={styles.navItems} />
        </div>
      </div>
        <Switch>
          <Route path="/calendar" component={CalendarScreen} />
          <Route path="/dashboard" component={SummaryScreen}/>
          <Route path="/settings" component={SettingsScreen}/>
          <Route path="/help" component={HelpScreen}/>
        </Switch>
    </div>
</Router>
*/
let styles = {
  activeHighlightedButton: {
    backgroundColor: '#DBDBDB',
  },
  highlightedButton: {
    color: '#000000',
    borderRadius: "20%",
    marginLeft: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    fontFamily: "Roboto",
  },
  navButtons: {
    marginLeft: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navItems: {
    display: "flex",
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
