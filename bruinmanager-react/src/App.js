import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom'
import logo from './logo.svg';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)



export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

/*
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