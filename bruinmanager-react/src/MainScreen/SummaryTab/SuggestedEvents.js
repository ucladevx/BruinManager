import React, { Component } from 'react';
import FeedCard from '../../Components/FeedCard.js';
import StarButton from '../../Components/StarButton';
export default class SuggestedEvents extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
        eventList: props.eventList,
		height: props.height,
      }
    }

	render() {
		return(
			<div style={{height: this.state.height, boxShadow: "1px 4px 7px 1px rgba(0, 0, 0, 0.25)",}}>
				<div style={styles.searchBar}>
					<StarButton/>
					<form>
						<input type="text" />
					</form>
					<div style={{width: 20,}}></div>
				</div>
				<div style={{display: "flex", width: "100%"}}>
					<div style={styles.tagBar}>

					</div>
					<div style={styles.scrollWrapper}>
						<div style={styles.header}></div>
						<div style={styles.newsfeed}>
							<FeedCard title='title 1' date='Tuesday, Feb 13' location= "Craft & Folk Art Museum" time= "13:00-15:00" going= "403" interested="4.2k" image= ""/>
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
				</div>
			</div>
		)
	}
}

let styles = {
	searchBar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		border: "1px solid #CFCFCF",
		borderBottom: "none",
		height: 50,
		paddingLeft: 5,
		paddingRight: 5,
	},
	tagBar: {
		border: "1px solid #CFCFCF",
		borderRight: "none",
		width: "20%",
	},
	scrollWrapper: {
		display: "flex",
		flexDirection: "column",
		height: 335,
		width: "80%",
	},
  	header: {
	  	position: "relative",
	  	height:1,
		borderBottom: "1px solid #CFCFCF",
	  	flex: "0 0 auto",
  	},
  	newsfeed: {
		overflow: "scroll",
		flex: "0 1 auto",
		background: "white",
	},
}
