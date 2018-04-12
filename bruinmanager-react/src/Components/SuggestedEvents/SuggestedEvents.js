import React, { Component } from 'react';
import FeedCard from './FeedCard.js';
import StarButton from './StarButton';
import './SuggestedEvents.scss';

import  { Image,Item } from 'semantic-ui-react'

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
			<div className="suggestedEvents-style-wrapper">
				<div className="search-bar">
					<div style={{width: 20,}}></div>
					<form style={{width: "50%"}}>
						<input type="text" placeholder="Search for nearby events" style={{width: "100%", borderRadius: "25px", paddingLeft: 20}}/>
					</form>
					<StarButton/>
				</div>

				<div style={{display: "flex", width: "100%", height: "calc(100% - 50px)", overflow: "hidden"}}>
					<div className="scroll-wrapper">
						<div className="events-header"></div>
						<div className="newsfeed">

                         <Item.Group divided>
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
                            </Item.Group>

						</div>
					</div>
				</div>
			</div>
		)
	}
}