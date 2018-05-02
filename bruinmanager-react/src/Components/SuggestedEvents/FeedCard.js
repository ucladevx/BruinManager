import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle,} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Bookmark from 'material-ui/svg-icons/action/bookmark';
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import Done from 'material-ui/svg-icons/action/done';
import './FeedCard.scss';
// title, date, time, location, going, interested
export default class FeedCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      time: this.props.time,
      location: this.props.location,
      title: this.props.title,
      date: this.props.date,
      picture: this.props.picture,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

	render(props) {
		return(
      <Card>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <div>
            <CardText style={{}}>
              {this.state.date}<br/>
              {this.state.title}<br/>
              {this.state.time}<br/>
              {this.state.location}
            </CardText>
            <CardActions style={{display: "flex", justifyContent: "space-between"}}>
              <Checkbox style={{width: "10"}}
                checkedIcon={<Done />}
                uncheckedIcon={<Done />}
              />
              <Checkbox style={{width: "10"}}
                checkedIcon={<Bookmark />}
                uncheckedIcon={<BookmarkBorder />}
              />
              <Checkbox style={{width: "10"}}
                checkedIcon={<ExpandMore />}
                uncheckedIcon={<ExpandLess />}
              />
            </CardActions>
          </div>
            <img src={this.state.picture} alt="" style={{ width: "140px", height: "140px", objectFit: "cover"}}/>
        </div>
      </Card>
    )
	}
}



/*
    <Item>

      <Item.Image src={this.props.image} />

      <Item.Content>
        <Item.Header>{this.props.title}</Item.Header>
        <Item.Meta content={this.props.date + " " + this.props.time} />
        <Item.Meta content={this.props.location} />
        <Item.Meta content={'Going: '+this.props.going + ", Interested: " + this.props.interested} />
        <Item.Description>Description of event</Item.Description>
        <Button basic className="interested-button" style={{float:'right'}}>+ I'm going!</Button>
      </Item.Content>
    </Item>
*/