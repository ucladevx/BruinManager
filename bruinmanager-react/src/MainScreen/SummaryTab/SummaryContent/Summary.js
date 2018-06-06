import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Summary.scss';
import {Grid,Segment } from  'semantic-ui-react'
import SuggestedEvents from '../../../Components/SuggestedEvents/SuggestedEvents.js';
import DiningStack from '../../../Components/DiningStack/DiningStack.js';
import NotesAndReminders from '../../../Components/NotesAndReminders/NotesAndReminders.js';

export default class Summary extends React.Component {
    render() {
		return (
      <div>
      <Grid style={{height: "95%"}}>
        <Grid.Column mobile={16} tablet={4} computer={4} largeScreen={7}>
          <SuggestedEvents/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={12} computer={12} largeScreen={8} style={{marginLeft: "30px"}}>
          <Grid.Row>
            
          </Grid.Row>
          <Grid.Row>
            
          </Grid.Row>
        </Grid.Column>
      </Grid>
      </div>
		)
	}
}
/*
      <Grid style={{height: "95%"}}>
        <Grid.Column mobile={16} tablet={4} computer={4} largeScreen={6}>
          <SuggestedEvents/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={12} computer={12} largeScreen={9} style={{marginLeft: "30px"}}>
          <Grid.Row>
            <NotesAndReminders/>
          </Grid.Row>
          <Grid.Row>
            <DiningStack/>
          </Grid.Row>
        </Grid.Column>
      </Grid>

*/
//<Segment> <NotesAndReminders/> </Segment>
//<Segment ><StandardCalendar className={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={10}/></Segment>
/*
<Grid.Column mobile={16} tablet={1} computer={1} largeScreen={1}>
  <Grid.Row>
    <br/>
  </Grid.Row>
</Grid.Column>
*/
