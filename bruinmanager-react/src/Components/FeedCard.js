import React, { Component } from 'react';
import { Button } from 'reactstrap';
import StarButton from './StarButton';
// title, date, time, location, going, interested
export default class SuggestedEvents extends React.Component {
	render(props) {
		return(
			<div style={styles.card}>
				<div style={{...{backgroundImage: `url(${this.props.image})`, backgroundSize: "100% 100%"}, ...styles.titleWrapper}}>
					<StarButton/>
					<div style={styles.eventBackdrop}>
						<p style={{...styles.largeFont, ...styles.textMargin}}>{this.props.title}</p>
					</div>
				</div>
				<div style={styles.infoWrapper}>
					<div style={styles.packageWrapper}>
						<p style={{...styles.largeFont, ...styles.textMargin}}>{this.props.date}</p>
						<p style={{...styles.largeFont, ...styles.textMargin}}>{this.props.time}</p>
					</div>
					<div style={styles.packageWrapper}>
						<p style={{...styles.smallFont, ...styles.textMargin}}>{this.props.location}</p>
					</div>
					<div style={styles.packageWrapper}>
						<p style={{...styles.smallFont, ...styles.textMargin}}>{this.props.going} going, {this.props.interested} interested</p>
					</div>
					<div style={styles.interestedButtonWrapper}>
						<Button color="link" style={{padding: "0 0 0 0", paddingBottom: 15, height: 10, fontSize: 13,textDecoration: "none",}}>+ I'm going!</Button>
					</div>
				</div>
			</div>
		)
	}
}

let styles = {
	card: {
		display: "flex",
		border: "1px solid #CFCFCF",
		borderTop: "none",
		minHeight: 120,
		minWidth: "100%",
		width: "100%",
		alignItems: "flex-end",
	},
	titleWrapper: {
		display: "flex",
		flexDirection: "column",
		width: "50%",
		height: "100%",
		minHeight: 120,
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	eventBackdrop: {
		backgroundColor: "#ffffff",
		width: "100%"
	},
	textMargin: {
		marginBottom: 0,
	},
	largeFont: {
		fontSize: 13,
		backgroundColor: "white",
	},
	smallFont: {
		fontSize: 12,
	},
	hr: {
		margin: "0 0 0 0",
		borderColor: "rgba(0, 0, 0, 0.33)",
	},
	infoWrapper: {
		display: "flex",
		flexDirection: "column",
		width: "50%",
		height: "100%",
		minHeight: 120,
		justifyContent: "center",
		borderLeft: "1px solid #CFCFCF",
		paddingLeft: 10,
		paddingRight: 10,
	},
	packageWrapper: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
	},
	interestedButtonWrapper: {
		display: "flex",
		width: "100%",
		justifyContent: "flex-end",
	}
}
