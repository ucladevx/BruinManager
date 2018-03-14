import React, { Component } from 'react';
import FeedCard from './FeedCard.js';
import StarButton from './StarButton';
export default class SuggestedEvents extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
        eventList: props.eventList,
		height: props.height,
		eventArray: [],
      }
    }

	componentDidMount() {
		fetch('https://arcane-cove-10079.herokuapp.com/api/events/1')
		.then(results => {
			return results.json();
		}).then(data => {
			console.log(data);
			this.setState({eventArray: data.events[0].eventArr});
		})
	}

	getMonthDate(dateObj) {
		return `${dateObj.toLocaleString("en-us", {month: "short"})}${'\u00a0'}${dateObj.getDate()}`;
	}

	getTime(dateObj) {
		if(isNaN(dateObj.getDate()))
			return "TBA";
		return `${dateObj.toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
	}
	getTimeRange(dateObj1, dateObj2) {
		return `${this.getTime(dateObj1)}-${this.getTime(dateObj2)}`;
	}
	render() {
		return(
			<div style={{boxShadow: "1px 4px 7px 1px rgba(0, 0, 0, 0.25)", height:"100%", width:"100%",}}>
				<div style={styles.searchBar}>
					<div style={{width: 20,}}></div>
					<form style={{width: "50%"}}>
						<input type="text" placeholder="Search for nearby events" style={{width: "100%", borderRadius: "25px", paddingLeft: 20}}/>
					</form>
					<StarButton/>
				</div>
				<div style={{display: "flex", width: "100%", height: "calc(100% - 50px)", overflow: "hidden"}}>
					<div style={styles.tagBar}>
						<span style={styles.tag}>Tag</span>
						<br/>
					</div>
					<div style={styles.scrollWrapper}>
						<div style={styles.header}></div>
						<div style={styles.newsfeed}>
							{this.state.eventArray.map((event) => {
								return <FeedCard title={event.name}
											date={this.getMonthDate(new Date(event.start_time))}
											location= {event.location}
											time= {this.getTimeRange(new Date(event.start_time), new Date(event.end_time))}
											going= {event.going}
											interested={event.interested}
											image= {event.picture}
											key={event.name}
										/>
							})}
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
		backgroundColor: "#0096EB",
	},
	tagBar: {
		display: "flex",
		justifyContent: "center",
		border: "1px solid #CFCFCF",
		borderRight: "none",
		height: "40vh",
		padding: 5,
	},
	tag: {
		backgroundColor: "#CFCFCF",
		borderRadius: "25%",
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		paddingRight: 10,
		textAlign: "center",
		height: 30,
	},
	scrollWrapper: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		overflow: "hidden",
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
		height: "40vh",
	},
}
