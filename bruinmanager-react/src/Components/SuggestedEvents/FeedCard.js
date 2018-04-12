import React, { Component } from 'react';
import StarButton from './StarButton';
import  {  Image,Item, Button } from 'semantic-ui-react'
import './FeedCard.scss';
// title, date, time, location, going, interested
export default class SuggestedEvents extends React.Component {
	render(props) {
		return(  <Item>
      <Item.Image className='event-image' src={this.props.image} />
      <Item.Content>
        <Item.Header>{this.props.title}</Item.Header>
        <Item.Meta content={this.props.date + " " + this.props.time} />
        <Item.Meta content={this.props.location} />
        <Item.Meta content={'Going: '+this.props.going + ", Interested: " + this.props.interested} />
        <Item.Description>Description of event</Item.Description>
        <Button color="link" className="interested-button">+ I'm going!</Button>
      </Item.Content>
    </Item>)
	}
}



