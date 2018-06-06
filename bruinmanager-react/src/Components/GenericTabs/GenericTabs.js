import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class GenericTabs extends React.Component {
  state = {
    value: 0,
    tabsLabel: [],
    tabsContent: [],
  };
  constructor(props) {
    super(props);
    this.state.tabsLabel = this.props.tabsLabel;
    this.state.tabsContent = this.props.tabsContent;
    console.log("tabsLabel:",this.state.tabsLabel);
    console.log("tabsContent:",this.state.tabsContent);
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const classes = this.props.classes;
    const value = this.state.value;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
          {this.state.tabsLabel.map(ele => {return(<Tab label={ele}/>);})}
          </Tabs>
        </AppBar>
        {this.state.tabsContent.map((ele, i) => {
          if(value === i)
            return(ele);
          })}
      </div>
    );
  }
}

GenericTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenericTabs);
