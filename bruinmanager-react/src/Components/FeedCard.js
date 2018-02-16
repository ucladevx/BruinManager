import React, { Component } from 'react';
// title, date, time, location, going, interested
export default class SuggestedEvents extends React.Component {
	render(props) {
		return(
			<div style={styles.card}>
				<div style={styles.titleWrapper}>
					<p style={{...styles.largeFont, ...styles.textMargin}}>{this.props.title}</p>
				</div>
				<hr style={styles.hr}/>
				<div style={styles.infoWrapper}>
					<div style={styles.packageWrapper}>
						<p style={{...styles.largeFont, ...styles.textMargin}}>{this.props.date}</p>
						<p style={{...styles.largeFont, ...styles.textMargin}}>{this.props.time}</p>
					</div>
					<div style={styles.packageWrapper}>
						<p style={{...styles.smallFont, ...styles.textMargin}}>{this.props.location}</p>
					</div>
					<div style={styles.packageWrapper}>
						<p style={{...styles.smallFont, ...styles.textMargin}}>{this.props.going} people going, {this.props.interested} interested</p>
					</div>
				</div>
			</div>
		)
	}
}

let styles = {
	card: {
		border: "1px solid black",
		borderTop: "none",
		minHeight: 120,
		width: "100%",
	},
	titleWrapper: {
		display: "flex",
		minHeight: 50,
		justifyContent: "flex-start",
		alignItems: "flex-end",
		paddingLeft: 7,
	},
	textMargin: {
		marginBottom: 0,
	},
	largeFont: {
		fontSize: 16,
	},
	smallFont: {
		fontSize: 14,
	},
	hr: {
		margin: "0 0 0 0",
		borderColor: "rgba(0, 0, 0, 0.33)",
	},
	infoWrapper: {
		display: "flex",
		flexDirection: "column",
		minHeight: 70,
		paddingLeft: 15,
		paddingRight: 15,
	},
	packageWrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
}
