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
import StandardCalendarStyle from '../../Components/StandardCalendar/StandardCalendar.css';
import WeatherBox from '../../Components/WeatherBox/WeatherBox.js';
import DiningStack from '../../Components/DiningStack/DiningStack.js';
import NotesAndReminders from '../../Components/NotesAndReminders/NotesAndReminders.js';
import moment from 'moment';

export default class Summary extends React.Component {
    render() {
		return (
            <div class="tab-wrapper">
                <div class="left-side">
                    <div class="weather-wrapper">
                        <WeatherBox weekNum={this.props.weekNumber} startWeek="3/11" endWeek="3/17"/>
                    </div>
                    <div class="dining-wrapper">
                        <DiningStack height = "auto"/>
                    </div>
                </div>
                <div class="right-side">
                    <div class="calendar-wrapper">
                        <StandardCalendar class={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={10}/>
                    </div>
                    <div class="bottom-side">
                        <div class="notes-wrapper">
                            <NotesAndReminders/>
                        </div>
                        <div class="events-wrapper">
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
        height: "99%",
    },
    leftSide: {
        gridRow: "1 / 7",
        gridColumn: "1 / 4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    },
    rightSide: {
        gridRow: "1 / 7",
        gridColumn: "5 / 21",
        display: "grid",
        gridTemplateColumns: "repeat(16, 1fr)",
        gridTemplateRows: "1fr 1fr",
        gridGap: "5px",
    },
    bottomSide: {
        gridRow: "2 / 3",
        gridColumn: "1 / 17",
        display: "grid",
        gridTemplateColumns: "repeat(16, 1fr)",
        gridTemplateRows: "auto",
    },
    calendarWrapper: {
        gridRow: "1 / 2",
        gridColumn: "1 / 17",
        overflow: "scroll",
    },
    notesWrapper: {
        gridRow: "1 / 2",
        gridColumn: "1 / 8",
    },
    eventsWrapper: {
        gridRow: "1 / 2",
        gridColumn: "9 / 17",
    },
}
