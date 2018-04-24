import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import {Grid,Segment,Responsive } from  'semantic-ui-react'
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
    <h1 >Settings</h1>
  )
}

const HelpScreen = () => {
  return (
    <h1 >Help</h1>
  )
}


const leftPanel = (match) => {
    return (
   <Route component={({ match }) =>
        <div>
            <Route path="/calendar" component={CalendarScreen} />
            <Route path="/dashboard" component={SummaryScreen}/>
            <Route path="/settings" component={SettingsScreen}/>
            <Route path="/help" component={HelpScreen}/>
        </div>
    }/>
   )
}

const rightPanel = (match) => {
    return (
    <Route component={({ match }) =>
        <div>
            <Route path="/calendar" component={CalendarScreen} />
            <Route path="/dashboard" component={SummaryScreen}/>
            <Route path="/settings" component={SettingsScreen}/>
            <Route path="/help" component={HelpScreen}/>
        </div>
    }/>

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
       <div className="mainScreen-style-wrapper">
        <div className="mainScreen-wrapper">
            <div className="current-tab">
            <Responsive minWidth={700}>
            <Router>
                <Switch>
                    <Grid >
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Route path="/calendar" component={CalendarScreen} />
                            <Route path="/dashboard" component={SummaryScreen}/>
                            <Route path="/settings" component={SettingsScreen}/>
                            <Route path="/help" component={HelpScreen}/>
                        </Grid.Column>
                         <Grid.Column width={11}>
                            <NavBar/>
                            <Route path="/calendar" component={CalendarScreen} />
                            <Route path="/dashboard" component={SummaryScreen}/>
                            <Route path="/settings" component={SettingsScreen}/>
                            <Route path="/help" component={HelpScreen}/>
                        </Grid.Column>
                    </Grid.Row>
                  </Grid>
            </Switch>
          </Router>
         </Responsive>

         <Responsive maxWidth={699}>
            <Router>
                <Switch>
                <Grid >
                    <Grid.Row>
                        <Grid.Column >
                            <NavBar/>
                            <Route path="/calendar" component={CalendarScreen} />
                            <Route path="/dashboard" component={SummaryScreen}/>
                            <Route path="/settings" component={SettingsScreen}/>
                            <Route path="/help" component={HelpScreen}/>
                        </Grid.Column>
                     </Grid.Row>
              </Grid>
            </Switch>
          </Router>
         </Responsive>
          </div>
       </div>
    </div>


		);
	}
}
/*

            <Responsive maxWidth={699}>
                <Grid >
                    <Grid.Row>
                        <Grid.Column >
                            <NavBar/>
                            <Route path="/calendar" component={CalendarScreen} />
                            <Route path="/dashboard" component={SummaryScreen}/>
                            <Route path="/settings" component={SettingsScreen}/>
                            <Route path="/help" component={HelpScreen}/>
                        </Grid.Column>
                     </Grid.Row>
              </Grid>
            </Responsive>
*/