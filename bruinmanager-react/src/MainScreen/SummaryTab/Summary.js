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

export default class Summary extends React.Component {
	render() {
		return (
			<div style={styles.overall}>
				<h1>Week {this.props.weekNumber}</h1>
				<OverviewCalendar/>
				<Table style={styles.bottomComponents}>
					<td><SuggestedEvents/></td>
					<td><Portal/></td>
				</Table>
			</div>
		)
	}
}

let styles = {
	bottomComponents: {
		paddingTop: 100,
	},
	overall: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingUp: 25,
		paddingDown: 25,
	},
}
