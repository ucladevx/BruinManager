import React, { Component } from 'react';
import { Table } from 'reactstrap';


export default class WeatherBox extends React.Component {
  render(props) {
      let tempHeight = this.props.height;
    return (
      <div style={{display: "flex", flexDirection: "column", height: tempHeight, width: "100%", border: "1px solid #CFCFCF", boxShadow: "1px 4px 7px 1px rgba(0, 0, 0, 0.25)",}}>
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
    borderBottom: "1px solid #CFCFCF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //marginRight: 50,
    padding: 5,
  }
}

/*
componentDidMount() {
    let city = "Los Angeles";
    let apiKey = "1b5adcf031a94ac19e646d5ed6c0f1dc";
    fetch(`api.openweathermap.org/data/2.5/weather?q=London&APPID=329c0d085ec9c5ebda1e5269e23edbb8`)
    .then(results => {
        return results
    }).then(data => {
        console.log(data.json());
        console.log(data);
    });
}
*/
