import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import OverviewCalendar from './OverviewCalendar';
import SuggestedEvents from './SuggestedEvents';
import Portal from './Portal';
import { Table } from 'reactstrap';
import StandardCalendar from './StandardCalendar.js';
import StandardCalendarStyle from './StandardCalendar.css';
import FeedCard from './FeedCard.js';
import WeatherBox from './WeatherBox';

export default class Summary extends React.Component {
	render() {
		return (
			<div style={styles.overall}>
        <h1>Hello, {this.props.firstName}!</h1>
        <div style={styles.firstColumn}>
          <WeatherBox weekNum={this.props.weekNumber} startWeek="2/11" endWeek="2/17" degrees={64} weatherCondition="Partly Cloudy"/>
        </div>
        <div style={styles.secondColumn}>
					<h1>Week {this.props.weekNumber}</h1>
					<StandardCalendar style={StandardCalendarStyle}/>
					<Table>
						<td><SuggestedEvents/></td>
						<td><Portal/></td>
					</Table>
        </div>
			</div>
		)
	}
}

let styles = {
	firstColumn: {
		borderWidth: 0,
    float: "left",
    width: "17.5%",
	},
	secondColumn: {
		borderWidth: 0,
    float: "right",
    width: "82.5%",
	},
	overall: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingUp: 25,
		paddingDown: 25,
	},
}
