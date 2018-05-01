import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Calendar.scss';
import WeatherBox from '../../../Components/WeatherBox/WeatherBox.js';
import {Grid,Segment } from  'semantic-ui-react'
import StandardCalendar from '../../../Components/StandardCalendar/StandardCalendar.js';
import StandardCalendarStyle from '../../../Components/StandardCalendar/StandardCalendar.scss';
import moment from 'moment';
import Paper from 'material-ui/Paper';

export default class Calendar extends React.Component {
  render() {
    return (
      <div className="calendar-style-wrapper">
        <Paper zDepth={1} style={{width:"100%", height:"100%"}} children={
          <StandardCalendar className={StandardCalendarStyle} startTime={moment()} isSmall = {false} weekNum={5}/>
        }/>
      </div>
    )
  }
}
/*
    <Grid >
    <Grid.Row>
      <Grid.Column mobile={16} tablet={4} computer={4} largeScreen={4} >
        <Segment className='week'>
        <h1 className="week-info centered">Week {this.props.weekNum}</h1>
            <p>Spring 2018</p>
            </Segment>
            <Segment style={{background:"none"}}>
            </Segment>
        </Grid.Column>
      <Grid.Column mobile={16} tablet={12} computer={12} largeScreen={12} className="calendar-content">
        <StandardCalendar className={StandardCalendarStyle} startTime={moment()} isSmall = {false} weekNum={10}/>
        </Grid.Column>
    </Grid.Row>
  </Grid>
*/