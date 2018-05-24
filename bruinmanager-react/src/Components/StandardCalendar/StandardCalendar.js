import React from 'react';
import moment from 'moment';
import './StandardCalendar.scss';
import WeekCalendar from '../WeekCalendar/WeekCalendar';

export default class StandardCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastUid: 0,
      selectedIntervals: [],
      isSmall: this.props.isSmall,
      startTime: this.props.startTime,
      weekNum: this.props.weekNum,
    }
  }

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
    }

  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals[index] = event;
      this.setState({selectedIntervals});
    }
  }

  handleSelect = (newIntervals) => {
    const {lastUid, selectedIntervals} = this.state;
    const intervals = newIntervals.map( (interval, index) => {

      return {
        ...interval,
        uid: lastUid + index
      }
    });

    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
  }

  render() {
    let tempTime = this.state.startTime;
    let timeLimit = new Date();
    timeLimit.setHours(19,0,0);

    if(tempTime.toDate() > timeLimit)
        tempTime = moment({h: 19, m:0 });
    if(!this.state.isSmall)
        tempTime = moment({h: 0, m: 0});
    return <WeekCalendar
      firstDay = {moment().startOf('week')}
      startTime = {tempTime}
      endTime = {moment({h: 23, m: 59})} // moment().clone().add('4', 'hour')
      numberOfDays= {7}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {this.handleSelect}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
      isSmall = {this.state.isSmall}
      scaleHeaderTitle = {`Week ${this.state.weekNum}`}
    />
  }
}
