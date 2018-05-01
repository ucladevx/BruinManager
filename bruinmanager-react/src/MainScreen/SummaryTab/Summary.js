import React from 'react';
//import './Summary.scss';
import WeatherBox from '../../Components/WeatherBox/WeatherBox.js';
import moment from 'moment';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import StandardCalendar from '../../Components/StandardCalendar/StandardCalendar.js';
export class SummaryImportant extends React.Component {
    render() {
		return (
            <div>
                <WeatherBox weekNum={this.props.weekNumber} startWeek="3/11" endWeek="3/17"/>
                <NotificationsIcon/>
                <StandardCalendar startTime={moment()} isSmall = {true} weekNum={10}/>
            </div>
		)
	}
}

//<Segment> <NotesAndReminders/> </Segment>