import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './WeatherBox.scss';
export default class WeatherBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      condition: "",
    }
  }

  componentDidMount() {
    let API_KEY = "6c3a52965805dd0e32727408884efe5d";
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=34.0689&lon=-118.4452&appid=${API_KEY}`;
    fetch(url, {
      method: 'get',
    })
    .then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({
        temperature: parseInt((9.0/5) * (data.main.temp - 273) + 32),
        condition: data.weather[0].main
      });
      // console.log(data.main.temp); // F = 9/5 (K - 273) + 32
    });
	}

  render(props) {
    return (
      <div className="weather-style-wrapper">
          <div className="week-num">
            <p className="week-info centered">Week {this.props.weekNum}<br/>{this.props.startWeek} - {this.props.endWeek}</p>
          </div>
          <div className="weather">
            <p className="temperature centered"><b>{this.state.temperature}&deg;</b></p>
            <p className="weather-condition centered">{this.state.condition}</p>
          </div>
      </div>
    )
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
