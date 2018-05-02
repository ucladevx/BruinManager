import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import LoginScreen from './LoginScreen/LoginScreen.js';
import SignUpScreen from './LoginScreen/SignUpScreen.js';
import MainScreen from './MainScreen/MainScreen';
import CalendarContent from './MainScreen/CalendarTab/CalendarContent/Calendar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue700, blue500, yellow500} from 'material-ui/styles/colors';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/*
const Dashboard = () => (
  <div>
    <MainScreen firstName="Taasin"/>
  </div>
)
*/

const Calendar = () => (
  <div>
    <CalendarContent/>
  </div>
)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fbdata: null
    }
    this.getData = this.getData.bind(this);
  }

  getData(data) {
    this.setState({
      fbdata: data
    });
  }

  render() {
    let Login = () => (
      <LoginScreen storeData={this.getData}/>
    );
    let DashboardScreen = () => (
      <MainScreen fbdata={this.state.fbdata}/>
    )
    let muiTheme = getMuiTheme({
      palette: {
        primary1Color: blue700,
        primary2Color: blue500,
        accent1Color: yellow500,
        pickerHeaderColor: blue700,
      },
    });
    return (
     <MuiThemeProvider muiTheme={muiTheme}>
      <Router className="app-style-wrapper">
        <div className="fullscreen">
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={SignUpScreen}/>
            <Route exact path="/dashboard" component={DashboardScreen}/>
            <Route exact path="/calendar" component={DashboardScreen}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
    );
  }
}
