import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import LoginScreen from './LoginScreen/LoginScreen.js';
import SignUpScreen from './LoginScreen/SignUpScreen.js';
import MainScreen from './MainScreen/MainScreen';
import CalendarScreen from './MainScreen/CalendarTab/Calendar.js';

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
    <CalendarScreen/>
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
      <div>
        <MainScreen fbdata={this.state.fbdata}/>
      </div>
    )
    return (
      <Router className="app-style-wrapper">
        <div className="fullscreen">
          <div className="fullscreen">
              <Route exact path="/" component={Login}/>
              <Route exact path="/signup" component={SignUpScreen}/>
              <Route path="/dashboard" component={DashboardScreen}/>
          </div>
        </div>
      </Router>
    );
  }
}

/*

<ul>
  <li style={{display: 'inline', marginLeft: 5,}}><Link to="/">Home</Link></li>
  <li style={{display: 'inline', marginLeft: 5,}}><Link to="/dashboard">Dashboard</Link></li>
  <li style={{display: 'inline', marginLeft: 5,}}><Link to="/login">Login</Link></li>
</ul>

<hr/>


let styles = {
  container: {
    backgroundColor: 'red',
  },
  header: {
    height: 150,
    padding: 20,
    color: '#ffffff',
  },
}
*/
