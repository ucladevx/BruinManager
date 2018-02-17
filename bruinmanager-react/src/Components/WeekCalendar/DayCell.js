import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  startSelection: PropTypes.func.isRequired,
};


class DayCell extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          hours: props.startTime.hours(),
          minutes: props.startTime.minutes(),
      };
  }
  handleMouseDown = (e) => {
    if (e.button === 0) {
      this.props.startSelection();
    }
  }

  render() {
    let tempRef = -1;
    let tempStyle = {};
    if(this.state.minutes === 45) {
        tempStyle = hourStyle;
    }
    if(this.state.minutes === 0) {
        tempRef = this.state.hours;
    }
    return (
      <div ref={tempRef} onMouseDown={this.handleMouseDown} className="dayCell" role="presentation" style={tempStyle}>
          &nbsp;
      </div>);
  }
}

DayCell.propTypes = propTypes;
export default DayCell;

let hourStyle = {
    borderBottom: '1px solid #b7b7b7',
}
