import React, { Component } from 'react';
import FeedCard from './FeedCard.js';
export default class SuggestedEvents extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
        eventList: props.eventList,
      }
    }

	render() {
		return(
			<div style={styles.background}>
				<h1>Suggested Events</h1>
				<div style={styles.newsfeed}>
					<FeedCard title='title 1' location= "startup ucla" time= "right now!" description= "testing"/>
					<FeedCard title='title 2' location= "startup ucla" time= "right now!" description= "testing"/>
					<FeedCard title='title 3' location= "startup ucla" time= "right now!" description= "testing"/>
					<FeedCard title='title 4' location= "startup ucla" time= "right now!" description= "testing"/>
					<FeedCard title='title 5' location= "startup ucla" time= "right now!" description= "testing"/>
					<FeedCard title='title 6' location= "startup ucla" time= "right now!" description= "testing"/>
					<FeedCard title='title 7' location= "startup ucla" time= "right now!" description= "testing"/>
					<FeedCard title='title 8' location= "startup ucla" time= "right now!" description= "testing"/>
					<FeedCard title='title 9' location= "startup ucla" time= "right now!" description= "testing"/>
				</div>
			</div>
		)
	}
}

let styles = {
	background: {
		"marginTop": "100",
	},
	newsfeed: {
		"display": "flex",
		"flex-wrap": "wrap",
		"width": "20vw",
		"height": "20vh",
		"background": "white",
		"overflow": "hidden",
		"overflow-y": "scroll",
		"justify-content": "space-around",
		"align-items": "center",
		"-webkit-transform": `translate3d(0,0,1px)`,
		"-webkit-backface-visibility": "hidden",
	}
}
