import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import LoginScreen from './LoginScreen/LoginScreen.js';
import MainScreen from './MainScreen/MainScreen';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Dashboard = () => (
  <div>
    <MainScreen firstName="Kyle"/>
  </div>
)

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{height: "100vh", width: "100vw", overflow: "hidden"}}>
          <div>
              <Route exact path="/" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/login" component={LoginScreen}/>
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
