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
            <Container fluid style={{height: "100%"}}>
                <Row style={styles.overview}>
                    <Col xs="1"></Col>
                    <Col xs="2">
                        <h2 style={styles.navItems}>Hello,{'\u00A0'}{this.props.firstName}!</h2>
                    </Col>
                    <Col xs="8" style={{display:"flex",justifyContent:"center",marginBottom: 8,}}>
                        <div style={styles.navButtons}>
                            <div>
                                <ButtonLinkDashboard style={styles.navItems} />
                                <ButtonLinkCalendar/>
                            </div>
                            <div>
                                <ButtonLinkSettings/>
                                <ButtonLinkHelp/>
                            </div>
                        </div>
                    </Col>
                    <Col xs="1"></Col>
                </Row>
                    <Switch>
                        <Route path="/calendar" component={CalendarScreen} />
                        <Route path="/dashboard" component={SummaryScreen}/>
                        <Route path="/settings" component={SettingsScreen}/>
                        <Route path="/help" component={HelpScreen}/>
                    </Switch>
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
  },
  overview: {
    //marginLeft: 50,
    //marginRight: 50,
    height: "10%",
    paddingTop: 10,
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
