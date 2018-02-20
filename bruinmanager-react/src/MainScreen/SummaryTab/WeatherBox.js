import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class WeatherBox extends React.Component {
  render(props) {
      let tempHeight = this.props.height;
    return (
      <div style={{display: "flex", flexDirection: "column", height: tempHeight, width: "100%", border: "1px solid black",}}>
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
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
  },
  weatherCondition: {
    fontSize: 16,
    margin: 0,
  },
  weekInfo: {
    fontSize: 24,
    marginBottom: 0,
  },
  weekNum: {
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //marginRight: 50,
    padding: 5,
  }
}
