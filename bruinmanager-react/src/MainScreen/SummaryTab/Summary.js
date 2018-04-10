import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Summary.scss';
import { Container, Row, Col } from 'reactstrap';
import SuggestedEvents from '../../Components/SuggestedEvents/SuggestedEvents.js';
import StandardCalendar from '../../Components/StandardCalendar/StandardCalendar.js';
import StandardCalendarStyle from '../../Components/StandardCalendar/StandardCalendar.scss';
import WeatherBox from '../../Components/WeatherBox/WeatherBox.js';
import DiningStack from '../../Components/DiningStack/DiningStack.js';
import NotesAndReminders from '../../Components/NotesAndReminders/NotesAndReminders.js';
import moment from 'moment';

export default class Summary extends React.Component {
    render() {
		return (
            <div className="tab-wrapper">
                <div className="left-side">
                    <div className="weather-wrapper">
                        <WeatherBox weekNum={this.props.weekNumber} startWeek="3/11" endWeek="3/17"/>
                    </div>
                    <div className="dining-wrapper">
                        <DiningStack height = "auto"/>
                    </div>
                </div>
                <div className="right-side">
                    <div className="calendar-wrapper">
                        <StandardCalendar className={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={10}/>
                    </div>
                    <div className="bottom-side">
                        <div className="notes-wrapper">
                            <NotesAndReminders/>
                        </div>
                        <div className="events-wrapper">
                            <SuggestedEvents/>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}