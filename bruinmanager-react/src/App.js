import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import LoginScreen from './LoginScreen/LoginScreen.js';
import SignUpScreen from './LoginScreen/SignUpScreen.js';
import MainScreen from './MainScreen/MainScreen';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


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
      <div>
        <MainScreen fbdata={this.state.fbdata}/>
      </div>
    )
    return (
     <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Router className="app-style-wrapper">
        <div className="fullscreen">
          <div className="fullscreen">
              <Route exact path="/" component={Login}/>
              <Route exact path="/signup" component={SignUpScreen}/>
              <Route path="/dashboard" component={DashboardScreen}/>
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
    );
  }
}
