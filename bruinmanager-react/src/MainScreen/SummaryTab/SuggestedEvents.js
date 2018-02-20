import React, { Component } from 'react';
import FeedCard from '../../Components/FeedCard.js';
export default class SuggestedEvents extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
        eventList: props.eventList,
      }
    }

	render() {
		return(
			<div style={styles.wrapper}>
				<div style={styles.header}></div>
				<div style={styles.newsfeed}>
					<FeedCard title='title 1' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/27709624_10156583848280656_6497485715349000922_o.jpg?oh=7f619c442e312a7f2524bf505de28485&oe=5B1BFFA5"/>
					<FeedCard title='title 2' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/27709624_10156583848280656_6497485715349000922_o.jpg?oh=7f619c442e312a7f2524bf505de28485&oe=5B1BFFA5"/>
					<FeedCard title='title 3' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/27709624_10156583848280656_6497485715349000922_o.jpg?oh=7f619c442e312a7f2524bf505de28485&oe=5B1BFFA5"/>
					<FeedCard title='title 4' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/27709624_10156583848280656_6497485715349000922_o.jpg?oh=7f619c442e312a7f2524bf505de28485&oe=5B1BFFA5"/>
					<FeedCard title='title 5' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/27709624_10156583848280656_6497485715349000922_o.jpg?oh=7f619c442e312a7f2524bf505de28485&oe=5B1BFFA5"/>
					<FeedCard title='title 6' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/27709624_10156583848280656_6497485715349000922_o.jpg?oh=7f619c442e312a7f2524bf505de28485&oe=5B1BFFA5"/>
					<FeedCard title='title 7' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/27709624_10156583848280656_6497485715349000922_o.jpg?oh=7f619c442e312a7f2524bf505de28485&oe=5B1BFFA5"/>
					<FeedCard title='title 8' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/27709624_10156583848280656_6497485715349000922_o.jpg?oh=7f619c442e312a7f2524bf505de28485&oe=5B1BFFA5"/>
					<FeedCard title='title 9' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= "https://scontent.xx.fbcdn.net/v/t31.0-8/q83/s720x720/27709624_10156583848280656_6497485715349000922_o.jpg?oh=7f619c442e312a7f2524bf505de28485&oe=5B1BFFA5"/>
				</div>
			</div>
		)
	}
}

let styles = {
	wrapper: {
		marginTop: 25,
		display: "flex",
		flexDirection: "column",
	  	height: "calc(100vh - 175px)",
  	},
  	header: {
	  	position: "relative",
	  	height:1,
		borderBottom: "1px solid black",
	  	flex: "0 0 auto",
  	},
  	newsfeed: {
		overflow: "scroll",
		flex: "0 1 auto",
		background: "white",
	},
}
