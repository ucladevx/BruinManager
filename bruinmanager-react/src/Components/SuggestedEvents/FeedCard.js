import React, { Component } from 'react';
import StarButton from './StarButton';
import  {  Image,Item, Button } from 'semantic-ui-react'
import './FeedCard.scss';
// title, date, time, location, going, interested
export default class SuggestedEvents extends React.Component {
	render(props) {
		return(  <Item>

      <Item.Image src={this.props.image} />

      <Item.Content>
        <Item.Header>{this.props.title}</Item.Header>
        <Item.Meta content={this.props.date + " " + this.props.time} />
        <Item.Meta content={this.props.location} />
        <Item.Meta content={'Going: '+this.props.going + ", Interested: " + this.props.interested} />
        <Item.Description>Description of event</Item.Description>
        <Button basic className="interested-button" style={{float:'right'}}>+ I'm going!</Button>
      </Item.Content>
    </Item>)
    /*
			<div className="feedCard-style-wrapper">
			<div className="feedCard-wrapper">
				<div className="title-wrapper" style={{backgroundImage: `url(${this.props.image})`}}>
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
            */

	}
}



