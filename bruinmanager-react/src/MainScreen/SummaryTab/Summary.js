import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Summary.scss';
import {Grid,Segment } from  'semantic-ui-react'
import { Container, Row, Col } from 'reactstrap';
import SuggestedEvents from '../../Components/SuggestedEvents/SuggestedEvents.js';
import StandardCalendar from '../../Components/StandardCalendar/StandardCalendar.js';
import StandardCalendarStyle from '../../Components/StandardCalendar/StandardCalendar.scss';
import WeatherBox from '../../Components/WeatherBox/WeatherBox.js';
import DiningStack from '../../Components/DiningStack/DiningStack.js';
import NotesAndReminders from '../../Components/NotesAndReminders/NotesAndReminders.js';
import moment from 'moment';

export default class Summary extends React.Component {
    render() {
		return (
   <Grid  celled>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={4} computer={4} largeScreen={4} >
        <Segment><WeatherBox weekNum={this.props.weekNumber} startWeek="3/11" endWeek="3/17"/></Segment>
        <Segment><DiningStack height = "auto"/></Segment>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={12} computer={12} largeScreen={12} >
        <Segment><StandardCalendar className={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={10}/></Segment>
        <Segment><Grid.Row >
            <Grid.Column mobile={16} tablet={12} computer={6} largeScreen={6} > <Segment><NotesAndReminders/> </Segment></Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={6} largeScreen={6} > <Segment><SuggestedEvents/></Segment> </Grid.Column>
        </Grid.Row></Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
		)
	}
}
