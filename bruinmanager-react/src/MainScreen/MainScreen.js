import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {Grid, Responsive, Segment } from  'semantic-ui-react'
import NavBar from '../Components/NavBar/NavBar.js'
import {BigCalendar,EtcCalendar} from './CalendarTab/Calendar';
import {SummaryImportant} from './SummaryTab/Summary'
import SuggestedEvents from '../Components/SuggestedEvents/SuggestedEvents.js';
import DiningStack from '../Components/DiningStack/DiningStack.js';
import './MainScreen.scss';

const SummaryScreenLeft = () => (
    <SummaryImportant/>
)

const CalendarScreenLeft = () => {
    <EtcCalendar />
}


const SummaryScreenRight = () => (
    <Grid >
        <Grid.Row>
             <Grid.Column mobile={16} tablet={16} computer={6}>
                     <Segment><SuggestedEvents/></Segment>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={6}>
                  <Segment> <DiningStack/> </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

const CalendarScreenRight = () => {
    <Segment><BigCalendar /></Segment>
}

const SettingsScreen = () => {
    <h1 >Settings</h1>
}

const HelpScreen = () => {
    <h1 >Help</h1>
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
       <div className="mainScreen-style-wrapper mainScreen-wrapper current-tab">
            <Responsive minWidth={700}>
            <Router>
                <Switch>
                    <Grid >
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Route path="/calendar" component={CalendarScreenLeft} />
                            <Route path="/dashboard" component={SummaryScreenLeft}/>
                            <Route path="/settings" component={SettingsScreen}/>
                            <Route path="/help" component={HelpScreen}/>
                        </Grid.Column>
                         <Grid.Column width={11}>
                            <NavBar/>
                            <Route path="/calendar" component={CalendarScreenRight} />
                            <Route path="/dashboard" component={SummaryScreenRight}/>
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
                            <Route path="/calendar" component={CalendarScreenLeft} />
                            <Route path="/calendar" component={CalendarScreenRight} />
                            <Route path="/dashboard" component={SummaryScreenLeft}/>
                            <Route path="/dashboard" component={SummaryScreenRight}/>
                            <Route path="/settings" component={SettingsScreen}/>
                            <Route path="/help" component={HelpScreen}/>
                        </Grid.Column>
                     </Grid.Row>
              </Grid>
            </Switch>
          </Router>
         </Responsive>
    </div>
		);
	}
}
