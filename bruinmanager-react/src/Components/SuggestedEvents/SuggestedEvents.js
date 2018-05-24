import React from 'react';
//import FeedCard from './FeedCard.js';
//import StarButton from './StarButton';
import Paper from 'material-ui/Paper';
import GridList from 'material-ui/GridList';
import {Tabs, Tab} from 'material-ui/Tabs';
import './SuggestedEvents.scss';
import { connect } from 'react-redux';
import { eventsFetchData } from '../../Actions/SuggestedEvents';
import FeedCard from './FeedCard';
import CircularProgress from 'material-ui/CircularProgress';

 class SuggestedEvents extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
        eventList: props.eventList,
		eventArray: [],
      }
    }

	componentDidMount() {
		this.props.fetchData("https://arcane-cove-10079.herokuapp.com/api/events/1")
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
		if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the events</p>;
        }

        if (this.props.isLoading) {
            return (
				<div className="suggested-events-loading-style">
					<CircularProgress />
				</div>);
        }
		return(
			<Paper zDepth={1} style={{height: "100%"}} children={
				<Tabs style={{height: "100%"}}> 
					<Tab label="Feed">
						<GridList cellHeight="20%" cols={1} style={{maxHeight: "86vh", overflowY: "auto"}}>
							{this.props.events.map((event) => {
								return (<FeedCard
											date={this.getMonthDate(new Date(event.start_time))}
											title={event.name}
											time={this.getTimeRange(new Date(event.start_time), new Date(event.end_time))}
											location={event.location}
											picture={event.picture}
										/>)
							})}
						</GridList>
					</Tab>
					<Tab label="Search">
						<GridList cellHeight="auto" cols={1} style={{height: "600px", overflowY: "auto"}} />
					</Tab>
					<Tab label="Saved">
						<GridList cellHeight="auto" cols={1} style={{height: "600px", overflowY: "auto"}} />
					</Tab>
				</Tabs>
			} />
		)
	}
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        hasErrored: state.eventsHasErrored,
        isLoading: state.eventsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(eventsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedEvents);


/*
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
							{this.props.events.map((event) => {
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
*/