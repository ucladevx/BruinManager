import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class OverviewCalendar extends React.Component {
	render() {
		return (
			<Table>
				<thead>
					<tr>
						<th>2/6</th>
						<th>2/7</th>
						<th>2/8</th>
						<th>2/9</th>
						<th>2/10</th>
						<th>2/11</th>
						<th>2/12</th>
					</tr>
				</thead>
				<tbody>
					<td>Details</td>
					<td>Details</td>
					<td>Details</td>
					<td>Details</td>
					<td>Details</td>
					<td>Details</td>
					<td>Details</td>
				</tbody>
			</Table>
		);
	}
}
