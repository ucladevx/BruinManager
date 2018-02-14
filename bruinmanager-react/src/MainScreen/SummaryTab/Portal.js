import React, { Component } from 'react';

export default class Portal extends React.Component {
	render() {
		return(
			<div style={styles.background}>
				<h1>Other Portals</h1>
			</div>
		)
	}
}

let styles = {
	background: {
		paddingTop: 100,
		border: "1px solid black",
	},
}
