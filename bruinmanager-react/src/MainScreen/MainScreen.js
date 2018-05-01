import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
//import {Grid,Segment } from  'semantic-ui-react'
import CalendarDrawer from './CalendarTab/CalendarDrawer/CalendarDrawer';
import SummaryDrawer from './SummaryTab/SummaryDrawer/SummaryDrawer';
import GenericContent from '../Components/GenericContent/GenericContent';
import CalendarContent from './CalendarTab/CalendarContent/Calendar';
import SummaryContent from './SummaryTab/SummaryContent/Summary';
import Drawer from 'material-ui/Drawer';
import Logo from './bruinhub-wordmark.png';
import './MainScreen.scss';

const SummaryScreen = () => {
  return(
    <div className="mainScreen-style-wrapper">
      <Drawer width = "25%" open={true} zDepth={2} >
        <div className="generic-drawer-style-wrapper">
          <div className="padding-wrapper">
            <div className="logo-wrapper">
              <img src={Logo} className="logo-style"/>
            </div>
            <SummaryDrawer />
            <div />
          </div>
        </div>            
      </Drawer>
      <GenericContent activeItem="dashboard"><SummaryContent /></GenericContent>
    </div>
  );
}

const CalendarScreen = () => {
  return (
    <div className="mainScreen-style-wrapper">
      <Drawer width = "25%" open={true} zDepth={2}>
        <div className="generic-drawer-style-wrapper">
          <div className="padding-wrapper">
            <div className="logo-wrapper">
              <img src={Logo} className="logo-style"/>
            </div>
            <CalendarDrawer />
            <div />
          </div>
        </div>            
      </Drawer> 
      <GenericContent activeItem="calendar"><CalendarContent /></GenericContent>
    </div>
  );
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
        <Switch>
          <Route path="/dashboard" component={SummaryScreen} />
          <Route path="/calendar" component={CalendarScreen} />
          <Route path="/settings" component={SummaryScreen} />
          <Route path="/help" component={SummaryScreen} />
        </Switch>
      </Router>
		);
	}
}

/*
            <Switch>
              <Route path="/calendar" component={<CalendarScreen />} />
              <Route path="/dashboard" component={<SummaryScreen />} />
              <Route path="/settings" component={<SummaryScreen />} />
              <Route path="/help" component={<SummaryScreen />} />
            </Switch>



            <Switch>
              <Route path="/calendar" component={<GenericContent><CalendarContent /></GenericContent> } />
              <Route path="/dashboard" component={<GenericContent><CalendarContent /></GenericContent> } />
              <Route path="/settings" component={SettingsScreen}/>
              <Route path="/help" component={HelpScreen}/>
            </Switch>
                    <div>
                    </div>
                    <div>
                      <Grid>
                      <Grid.Row>
                        <Grid.Column mobile={16} tablet={4} computer={4} largeScreen={4} >
                          <Segment></Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={12} computer={12} largeScreen={12} >
                            <NavBar />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
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
*/
