import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

export default class WeatherBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let API_KEY = "6c3a52965805dd0e32727408884efe5d";
    let url = `http://samples.openweathermap.org/data/2.5/weather?lat=34.0689&lon=-118.4452&appid=${API_KEY}`;
    axios.get(url).then((res) => console.log("weather" + res));
	}

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
