import React from 'react';
import './FeedCard.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    width: "100%",
  },
  cardInner: {

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class FeedCard extends React.Component {
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
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const classes= this.props.classes;
    return (
      <div style = {{width: "100%"}}>
        <Card className={classes.card}>
          <div style ={{display: "flex", alignItems: "center", width: "100%"}}>
            <div style={{width: "60%"}}>
              <CardHeader
                title={this.state.title}
                subheader={this.state.date}
              />
              <CardContent>
                <Typography component="p">
                  {this.state.time}
                  {this.state.location}
                </Typography>
              </CardContent>
            </div>
            <div style={{width: "40%"}}>
              <CardMedia
                className={classes.media}
                image={this.state.picture}
                title={this.state.title}
              />
            </div>
          </div>
          <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Save">
                  <BookmarkIcon />
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                More event information!
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

FeedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedCard);


/*
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


*/