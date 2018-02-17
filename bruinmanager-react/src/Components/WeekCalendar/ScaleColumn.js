import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  scaleUnit: PropTypes.number.isRequired,
  scaleFormat: PropTypes.string.isRequired,
  scaleIntervals: PropTypes.array.isRequired,
  cellHeight: PropTypes.number.isRequired,
};

class ScaleColumn extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.scaleUnit !== this.props.scaleUnit
    || nextProps.cellHeight !== this.props.cellHeight;
  }

  renderScaleCell(scaleInterval, index) {
    const {
      cellHeight,
      scaleFormat,
    } = this.props;
    let tempContent = "";
    let bottomStyle = "none";
    //console.log(scaleFormat);
    let tempRef = -1;
    if(scaleInterval.start.minutes() === 0) {
        tempContent = scaleInterval.start.format(scaleFormat);
        tempRef = scaleInterval.start.hour();
    }
    if(scaleInterval.start.minutes() === 45) {
        bottomStyle = '1px solid #b7b7b7';
    }
    return (
      <div ref={tempRef} key={index} className="weekCalendar__scaleCell" style={{ height: cellHeight, lineHeight: `${cellHeight}px`, borderBottom: bottomStyle, }}>
        <span>{tempContent}</span>
      </div>
    );
  }

  render() {
    const { scaleIntervals } = this.props;
    ///console.log(scaleIntervals);
    return (
      <div>
        {scaleIntervals.map((scaleInterval, index) => this.renderScaleCell(scaleInterval, index))}
      </div>
    );
  }
}

ScaleColumn.propTypes = propTypes;
export default ScaleColumn;
