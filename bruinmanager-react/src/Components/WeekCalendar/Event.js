import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};


class Event extends React.PureComponent {
  render() {
    const {
      start,
      end,
      value,
      title,
      location,
    } = this.props;
    return (
      <div className="event">
        <span>{value}</span>
        <br/>
        <span>{location}</span>
      </div>
    );
  }
}
Event.propTypes = propTypes;
export default Event;
