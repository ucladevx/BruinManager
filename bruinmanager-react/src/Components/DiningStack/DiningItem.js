import React from 'react';
//import './DiningItem.scss';
//import { connect } from 'react-redux';
//import { diningFetchData } from '../../Actions/DiningItem';
import Opened from 'material-ui/svg-icons/action/lock-open';
import Closed from 'material-ui/svg-icons/action/lock-outline';
import {red300, green300} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';

export default class DiningItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      convertName: {
        "covel": "Covel",
        "deneve": "De Neve",
        "feastatrieber": "Feast",
        "bruinplate": "BPlate",
        "bruincafe": "Bruin Cafe",
        "cafe1919": "Cafe 1919",
        "rendezvous": "Rendezvous",
        "thestudyathedrick": "The Study",
      },
      name: props.name,
      status: "Loading",
      closing: "Loading",
    }
  }

  componentDidMount() {    
    fetch(`https://arcane-cove-10079.herokuapp.com/api/hours/${this.state.name}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          status: data.status,
          closing: data.closingTime,
        })
      });
  }

  getProperName() {
    return this.state.convertName[`${this.state.name}`];
  }
  
  getProperResponse() {
    if(this.state.status === undefined)
      return "try again later";
    if(this.state.status === "OPEN")
      return `until ${this.state.closing.split("m")[0]}m`;
    else
      return "closed right now";
  }
  
  getProperIcon() {
    if(this.state.status === "OPEN")
      return <Opened color={green300}/>;
    else
      return <Closed color={red300}/>;
  }

  render() {
    return <ListItem
            primaryText={this.getProperName()}
            secondaryText={this.getProperResponse()}
            rightIcon={this.getProperIcon()} />
  }
}

/*
render --
    if(curName in this.props.hasErrored)
      return <ListItem primaryText={this.getProperName(exactDining)} secondaryText="Try again later..."/>
    if(this.props.isLoading[curName])
      return <ListItem primaryText={this.getProperName(exactDining)} secondaryText="Loading..." />
--

const mapStateToProps = (state) => {
  console.log("STATE")
  console.log(state)
  return {
    dining: state.dining,
    hasErrored: state.diningHasErrored,
    isLoading: state.diningIsLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url, name) => dispatch(diningFetchData(url, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiningItem);
*/