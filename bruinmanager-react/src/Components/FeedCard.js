import React, { Component } from 'react';

export default class SuggestedEvents extends React.Component {
	render(props) {
		return(
			<div style={styles.card}>
				<h4>{this.props.title}</h4>
				<p> time: {this.props.time}<br/>
					location: {this.props.location}<br/>
					description: {this.props.description}
				</p>
			</div>
		)
	}
}

let styles = {
	card: {
		"border": "5px solid black",
	},
}
