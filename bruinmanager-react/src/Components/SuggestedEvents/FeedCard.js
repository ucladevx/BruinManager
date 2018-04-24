import React from 'react';
import  { Item, Button } from 'semantic-ui-react'
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
	}
}



