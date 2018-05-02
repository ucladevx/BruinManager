import React from 'react';
//import './DiningItem.scss';
import { connect } from 'react-redux';
import { diningFetchData } from '../../Actions/DiningItem';
import Opened from 'material-ui/svg-icons/action/lock-open';
import Closed from 'material-ui/svg-icons/action/lock-outline';
import {red300, green300} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
class DiningItem extends React.Component {
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
    this.props.fetchData(`https://arcane-cove-10079.herokuapp.com/api/hours/${this.state.name}`)
  }

  getProperName() {
    return this.state.convertName[`${this.state.name}`];
  }
  
  getProperResponse(dining) {
    console.log("**");
    console.log(dining);
    if(dining.status === "OPEN")
      return `until ${dining.closing}`;
    else if(dining.closing === -1)
      return "";
    else if(dining.closing !== "Loading")
      return `until ${dining.closing}`;
  }

  render() {
    console.log(this.props.dining);
    if(this.props.hasErrored)
      return <ListItem primaryText={this.getProperName(this.props.dining)} secondaryText="Try again later..."/>
    if(this.props.isLoading)
      return <ListItem primaryText={this.getProperName(this.props.dining)} secondaryText="Loading..." />
    return <ListItem primaryText={this.getProperName(this.props.dining)} secondaryText={this.getProperResponse(this.props.dining)} rightIcon={<Opened color={green300}/>}/>
  }
}

const mapStateToProps = (state) => {
  return {
      status: state.dining.status,
      closing: state.dining.closing,
      hasErrored: state.diningHasErrored,
      isLoading: state.diningIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(diningFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiningItem);