import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import LoginScreen from './LoginScreen/LoginScreen.js';
import SignUpScreen from './LoginScreen/SignUpScreen.js';
import MainScreen from './MainScreen/MainScreen';
import IntermediateScreen from './Components/IntermediatePage/IntermediatePage.js';
import CalendarContent from './MainScreen/CalendarTab/CalendarContent/Calendar.js';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MuiThemeProvider} from '@material-ui/core/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {createMuiTheme} from '@material-ui/core/styles';
import {blue700, blue500, blue900, yellow500, yellow700, yellow900 } from 'material-ui/styles/colors';
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
      panlette: {
        primary1Color: blue700,
        primary2Color: blue500,
        accent1Color: yellow500,
        pickerHeaderColor: blue700,
      },
    });
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: blue500,
          main: blue700,
          dark: blue900,
          contrastText: '#fff',
        },
        secondary: {
          light: yellow500,
          main: yellow700,
          dark: yellow900,
          contrastText: '#000',
        },
        root: {
          width: '100%',
          height: '100%',
        },
      },
    });
    return (
     <MuiThemeProvider theme={theme}>
      <Router className="app-style-wrapper">
        <div className="app-fullscreen">
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={SignUpScreen}/>
            <Route exact path="/dashboard" component={DashboardScreen}/>
            <Route exact path="/calendar" component={DashboardScreen}/>
            <Route exact path="/intermediate" component={IntermediateScreen}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
    );
  }
}
