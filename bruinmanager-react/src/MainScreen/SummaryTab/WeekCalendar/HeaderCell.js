import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  date: PropTypes.object.isRequired,
  dayFormat: PropTypes.string.isRequired,
};


class HeaderCell extends React.PureComponent {
  render() {
    const {
      date,
      dayFormat,
    } = this.props;
    return (<span className="title">{date.format(dayFormat)}</span>);
  }
}

HeaderCell.propTypes = propTypes;
export default HeaderCell;

//{date.format(dayFormat.substring(0, 3))}<br/>{date.format(dayFormat.substring(4, 10))}
