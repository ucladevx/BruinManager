import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom'

export default class Summary extends React.Component {
	render() {
		return (
			<h1>Week {this.props.weekNumber}</h1>
		)
	}
}
