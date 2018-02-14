import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class WeatherBox extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.weekNum}>
          <p style={{...styles.weekInfo, ...styles.centered}}>Week {this.props.weekNum}<br/>{this.props.startWeek} - {this.props.endWeek}</p>
        </div>
        <div style={styles.weather}>
          <p style={{...styles.temperature, ...styles.centered}}>{this.props.degrees} &deg;</p>
          <p style={{...styles.weatherCondition, ...styles.centered}}>{this.props.weatherCondition}</p>
        </div>
      </div>
    )
  }
}

let styles = {
  centered: {
    textAlign: 'center',
  },
  temperature: {
    fontSize: 36,
    margin: 0,
  },
  weather: {
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    marginRight: 50,
    marginBottom: 50,
    paddingTop: 50,
    paddingBottom: 50,
  },
  weatherCondition: {
    fontSize: 16,
    margin: 0,
  },
  weekInfo: {
    fontSize: 24,
  },
  weekNum: {
    border: "1px solid black",
    marginRight: 50,
    padding: 5,
  }
}
