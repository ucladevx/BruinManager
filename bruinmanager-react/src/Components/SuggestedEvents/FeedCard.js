import React, { Component } from 'react';
import { Button } from 'reactstrap';
import StarButton from './StarButton';
import './FeedCard.scss';
// title, date, time, location, going, interested
export default class SuggestedEvents extends React.Component {
	render(props) {
		return(
			<div className="feedCard-style-wrapper">
				<div className="feedCard-wrapper">
					<div style={{backgroundImage: `url(${this.props.image})`}} className="title-wrapper">
						<StarButton/>
						<div className="event-backdrop">
							<p className="large-font text-margin">{this.props.title}</p>
						</div>
					</div>
					<div className="info-wrapper">
						<div className="package-wrapper">
							<p className="large-font text-margin">{this.props.date}</p>
							<p className="large-font text-margin">{this.props.time}</p>
						</div>
						<div className="package-wrapper">
							<p className="small-font text-margin">{this.props.location}</p>
						</div>
						<div className="package-wrapper">
							<p className="small-font text-margin">{this.props.going} going, {this.props.interested} interested</p>
						</div>
						<div className="interested-button-wrapper">
							<Button color="link" className="interested-button">+ I'm going!</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}