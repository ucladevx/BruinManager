import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import OverviewCalendar from './OverviewCalendar';
import SuggestedEvents from './SuggestedEvents';
import Portal from './Portal';
import { Table } from 'reactstrap';
import StandardCalendar from '../../Components/StandardCalendar';
import StandardCalendarStyle from '../../Components/StandardCalendar.css';
import WeatherBox from './WeatherBox';
import DiningStack from './DiningStack';
import NotesAndReminders from './NotesAndReminders';
import moment from 'moment';

export default class Summary extends React.Component {
    render() {
		return (
                <Row noGutters>
                    <Col xs="2" style={{height: "100%", marginTop: 10, paddingRight: 10}}>
                        <WeatherBox height = "20%" weekNum={this.props.weekNumber} startWeek="2/11" endWeek="2/17" degrees={64} weatherCondition="Partly Cloudy"/>
                        <DiningStack height = "auto"/>
                    </Col>
                    <Col xs = "10" style={{height: "50%", marginTop: 10}}>
                        <Row noGutters>
                            <StandardCalendar style={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={1}/>
                        </Row>
                        <Row noGutters style={{height: "50%", marginTop: 10}}>
                            <Col style={{paddingRight: 10, height: "auto"}}>
                                <NotesAndReminders/>
                            </Col>
                            <Col style={{ height: "100%"}}>
                                <SuggestedEvents/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
		)
	}
}
/*
<div style={styles.overall}>
    <div style={styles.firstColumn}>
        <WeatherBox weekNum={this.props.weekNumber} startWeek="2/11" endWeek="2/17" degrees={64} weatherCondition="Partly Cloudy"/>
    </div>
    <div style={styles.secondColumn}>
        <StandardCalendar style={StandardCalendarStyle}/>
        <Table>
            <td><SuggestedEvents/></td>
            <td><Portal/></td>
        </Table>
    </div>
</div>
*/

let styles = {
	firstColumn: {
		borderWidth: 0,
    marginTop: 20,
    float: "left",
    width: "17.5%",
	},
  navItems: {
    display: "inline-block",
  },
  colOffset: {
    marginLeft: -100,
  },
	secondColumn: {
		borderWidth: 0,
    marginTop: 20,
    float: "right",
    width: "82.5%",
	},
	overall: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingUp: 25,
		paddingDown: 25,
	},
}
