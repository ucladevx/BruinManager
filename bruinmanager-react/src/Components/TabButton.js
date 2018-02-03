import React, { Component } from 'react';

export default class TabButton extends React.Component {
	handleClick = () => {
		console.log("Clicked")
	}

	render() {
		return (
			<div onClick={this.handleClick} style={styles.container}>
				<h1>
					{this.props.tabName}
				</h1>
			</div>
		);
	}
}

let styles = {
	container: {
		width: 200,
		height: 200,
		backgroundColor: '#ff0000'
	},
}