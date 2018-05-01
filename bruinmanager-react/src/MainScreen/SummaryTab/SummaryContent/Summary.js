import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Summary.scss';
import {Grid,Segment } from  'semantic-ui-react'
import {Container, Row, Col} from 'reactstrap';
import SuggestedEvents from '../../../Components/SuggestedEvents/SuggestedEvents.js';
import StandardCalendar from '../../../Components/StandardCalendar/StandardCalendar.js';
import StandardCalendarStyle from '../../../Components/StandardCalendar/StandardCalendar.scss';
import WeatherBox from '../../../Components/WeatherBox/WeatherBox.js';
import DiningStack from '../../../Components/DiningStack/DiningStack.js';
import NotesAndReminders from '../../../Components/NotesAndReminders/NotesAndReminders.js';
import moment from 'moment';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

export default class Summary extends React.Component {
    render() {
		return (
   <Grid style={{width: "95%",}}>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={4} computer={4} largeScreen={6} >
        <Segment><SuggestedEvents/></Segment>        
      </Grid.Column>
      <Grid.Column mobile={16} tablet={12} computer={12} largeScreen={10} >
         <Grid>
            <Grid.Row>
                 
                 <Segment> <NotesAndReminders/> </Segment>
                
            </Grid.Row>
            <Grid.Row>
                
                      <Segment><DiningStack/></Segment>
                
            </Grid.Row>
        </Grid>

      </Grid.Column>
    </Grid.Row>
  </Grid>
		)
	}
}
//<Segment> <NotesAndReminders/> </Segment>
//<Segment ><StandardCalendar className={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={10}/></Segment>