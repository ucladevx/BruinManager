import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  startSelection: PropTypes.func.isRequired,
};


class DayCell extends React.Component {
  constructor (props) {
      super(props);
      let tempHour = props.startTime.minute() === 45;
      this.state = {
          isHour: tempHour,
      };
  }
  handleMouseDown = (e) => {
    if (e.button === 0) {
      this.props.startSelection();
    }
  }

  render() {
    let tempStyle = {}
    if(this.state.isHour) {
        tempStyle = hourStyle;
    }
    return (
      <div onMouseDown={this.handleMouseDown} className="dayCell" role="presentation" style={tempStyle}>
          &nbsp;
      </div>);
  }
}

DayCell.propTypes = propTypes;
export default DayCell;

let hourStyle = {
    borderBottom: '1px solid #b7b7b7',
}
