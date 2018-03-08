import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import SuggestedEvents from '../../Components/SuggestedEvents/SuggestedEvents.js';
import StandardCalendar from '../../Components/StandardCalendar/StandardCalendar.js';
import StandardCalendarStyle from '../../Components/StandardCalendar/StandardCalendar.css';
import WeatherBox from '../../Components/WeatherBox/WeatherBox.js';
import DiningStack from '../../Components/DiningStack/DiningStack.js';
import NotesAndReminders from '../../Components/NotesAndReminders/NotesAndReminders.js';
import moment from 'moment';

export default class Summary extends React.Component {
    render() {
		return (
            <div style={styles.tabWrapper}>
                <div style={styles.weatherWrapper}>
                    <WeatherBox weekNum={this.props.weekNumber} startWeek="2/25" endWeek="3/3"/>
                </div>
                <div style={styles.calendarWrapper}>
                    <StandardCalendar style={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={7}/>
                </div>
                <div style={styles.diningWrapper}>
                    <DiningStack height = "auto"/>
                </div>
                <div style={styles.notesWrapper}>
                    <NotesAndReminders/>
                </div>
                <div style={styles.eventsWrapper}>
                    <SuggestedEvents/>
                </div>
            </div>
		)
	}
}

let styles = {
    tabWrapper: {
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(20, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        height: "100%",
    },
    weatherWrapper: {
        gridRow: "1 / 2",
        gridColumn: "1 / 4",
    },
    calendarWrapper: {
        gridRow: "1 / 3",
        gridColumn: "5 / 21",
    },
    diningWrapper: {
        gridRow: "2 / 5",
        gridColumn: "1 / 4",
    },
    eventsWrapper: {
        gridRow: "3 / 5",
        gridColumn: "14 / 21",
    },
    notesWrapper: {
        gridRow: "3 / 5",
        gridColumn: "5 / 13",
    },
}
