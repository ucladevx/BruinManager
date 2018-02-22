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
                    <Col xs="1"></Col>
                    <Col xs="2" style={{height: "100%", marginTop: 10, paddingRight: 20}}>
                        <WeatherBox height = "20%" weekNum={7} startWeek="2/18" endWeek="2/24" degrees={52} weatherCondition="Partly Cloudy"/>
                        <DiningStack height = "auto"/>
                    </Col>
                    <Col xs = "8" style={{height: "50%", marginTop: 10}}>
                        <Row noGutters>
                            <StandardCalendar style={StandardCalendarStyle} startTime={moment()} isSmall = {true} weekNum={7}/>
                        </Row>
                        <Row noGutters style={{height: "50%", marginTop: 20}}>
                            <Col style={{paddingRight: 20, height: "auto"}}>
                                <NotesAndReminders/>
                            </Col>
                            <Col style={{ height: "100%"}}>
                                <SuggestedEvents/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="1"></Col>
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
