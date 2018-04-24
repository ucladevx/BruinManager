import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Summary.scss';
import {Grid,Segment } from  'semantic-ui-react'
import {Container, Row, Col} from 'reactstrap';
import SuggestedEvents from '../../Components/SuggestedEvents/SuggestedEvents.js';
import StandardCalendar from '../../Components/StandardCalendar/StandardCalendar.js';
import StandardCalendarStyle from '../../Components/StandardCalendar/StandardCalendar.scss';
import WeatherBox from '../../Components/WeatherBox/WeatherBox.js';
import DiningStack from '../../Components/DiningStack/DiningStack.js';
import NotesAndReminders from '../../Components/NotesAndReminders/NotesAndReminders.js';
import moment from 'moment';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

export default class Summary extends React.Component {
    render() {
		return (
   <Grid >
    <Grid.Row>
      <Grid.Column mobile={16} tablet={4} computer={4} largeScreen={4} >
        <Segment className='week'><WeatherBox weekNum={this.props.weekNumber} startWeek="3/11" endWeek="3/17"/></Segment>
        <NotificationsIcon/>
        <Segment ><StandardCalendar className={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={10}/></Segment>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={12} computer={12} largeScreen={12} >
         <Grid >
            <Grid.Row>
                 <Grid.Column mobile={16} tablet={8} computer={8} largeScreen={8} >
                         <Segment><SuggestedEvents/></Segment>
                </Grid.Column>

                <Grid.Column mobile={16} tablet={8} computer={8} largeScreen={8} >
                      <Segment> <DiningStack/> </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>

      </Grid.Column>
    </Grid.Row>
  </Grid>
		)
	}
}
//<Segment> <NotesAndReminders/> </Segment>