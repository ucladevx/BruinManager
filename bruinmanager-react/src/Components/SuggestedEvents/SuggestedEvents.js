import React from 'react';
//import FeedCard from './FeedCard.js';
//import StarButton from './StarButton';
import './SuggestedEvents.scss';
import { connect } from 'react-redux';
import { eventsFetchData } from '../../Actions/SuggestedEvents';
import FeedCard from './FeedCard';
import GenericTabs from '../GenericTabs/GenericTabs.js';
import GenericCardContainer from '../GenericCardContainer/GenericCardContainer.js';
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
	createCardArr(eventsArr) {
		let ans = []
		eventsArr.forEach(event => {
			ans.push(
				<FeedCard
					date={this.getMonthDate(new Date(event.start_time))}
					title={event.name}
					time={this.getTimeRange(new Date(event.start_time), new Date(event.end_time))}
					location={event.location}
					picture={event.picture}
				/>
			);
		});
		return ans;
	}

	render() {
		if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the events</p>;
        }
        else if (this.props.isLoading) {
            return (
				<div className="suggested-events-loading-style">
					<p>loading!</p>
				</div>);
		}
		else {
			let multisomething = [];
			multisomething.push(<GenericCardContainer cards={this.createCardArr(this.props.events)} />);
			multisomething.push(<GenericCardContainer cards={this.createCardArr(this.props.events)} />);
			multisomething.push(<GenericCardContainer cards={this.createCardArr(this.props.events)} />);
			console.log("this.props.events", this.props.events);
			console.log("multisomething: ", multisomething);
			return(
				<GenericTabs tabsLabel = {['Feed','Search','Saved']} tabsContent = {multisomething}/>
			);
		}
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
			<Paper zDepth={1} style={{height: "95%"}} children={
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
*/