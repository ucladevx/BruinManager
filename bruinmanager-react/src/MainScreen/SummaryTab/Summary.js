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
                <div style={styles.leftSide}>
                    <div style={styles.weatherWrapper}>
                        <WeatherBox weekNum={this.props.weekNumber} startWeek="2/25" endWeek="3/3"/>
                    </div>
                    <div style={styles.diningWrapper}>
                        <DiningStack height = "auto"/>
                    </div>
                </div>
                <div style={styles.rightSide}>
                    <div>
                        <div style={styles.calendarWrapper}>
                            <StandardCalendar style={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={7}/>
                        </div>
                    </div>
                    <div style={styles.bottomSide}>
                        <div style={styles.notesWrapper}>
                            <NotesAndReminders/>
                        </div>
                        <div style={styles.eventsWrapper}>
                            <SuggestedEvents/>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

let styles = {
    tabWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(20, 1fr)",
        gridTemplateRows: "1fr",
        height: "100%",
    },
    leftSide: {
        gridRow: "1 / 7",
        gridColumn: "1 / 4",
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    rightSide: {
        gridRow: "1 / 7",
        gridColumn: "5 / 21",
        display: "flex",
        flexDirection: "column",
    },
    bottomSide: {
        display: "grid",
        gridTemplateColumns: "repeat(16, 1fr)",
        gridTemplateRows: "auto",
    },
    calendarWrapper: {
        gridRow: "1 / 10",
        gridColumn: "1 / 17",
    },
    notesWrapper: {
        marginTop: 15,
        gridRow: "1 / 2",
        gridColumn: "1 / 8",
    },
    eventsWrapper: {
        marginTop: 15,
        gridRow: "1 / 2",
        gridColumn: "9 / 17",
    },
}
