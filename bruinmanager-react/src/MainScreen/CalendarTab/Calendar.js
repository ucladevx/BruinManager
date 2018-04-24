import React from 'react';
import './Calendar.scss';

import {Grid,Segment } from  'semantic-ui-react'
//import StandardCalendar from '../../Components/StandardCalendar/StandardCalendar.js';
//import StandardCalendarStyle from '../../Components/StandardCalendar/StandardCalendar.scss';
import Calendar2 from 'material-ui/DatePicker/Calendar';


export default class Calendar extends React.Component {
  render() {
    return (
    <Grid >
    <Grid.Row>
      <Grid.Column mobile={16} tablet={4} computer={4} largeScreen={4} >
        <Segment className='week'>
        <h1 className="week-info centered">Week {this.props.weekNum}</h1>
            <p>Spring 2018</p>
            </Segment>
            <Segment style={{background:"none"}}>
            <Calendar2
                width= {"100%"}
                style={{width:"100%"}}
                className={'checkme'}
                autoOk={false}
                cancelLabel={false}
                firstDayOfWeek={1}
                mode={'portrait'}
                open={true}/>
            </Segment>
        </Grid.Column>
      <Grid.Column mobile={16} tablet={12} computer={12} largeScreen={12} className="calendar-content">
        </Grid.Column>
    </Grid.Row>
  </Grid>

    )
  }
}
