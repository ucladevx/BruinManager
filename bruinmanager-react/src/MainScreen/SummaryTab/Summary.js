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

export default class Summary extends React.Component {
	render() {
		return (
			<div style={styles.overall}>
				<h1>Week {this.props.weekNumber}</h1>
				<StandardCalendar style={StandardCalendarStyle}/>
				<Table>
					<td><SuggestedEvents/></td>
					<td><Portal/></td>
				</Table>
			</div>
		)
	}
}

let styles = {
	overall: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingUp: 25,
		paddingDown: 25,
	},
}
