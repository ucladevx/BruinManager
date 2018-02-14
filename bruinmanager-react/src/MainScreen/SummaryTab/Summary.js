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
import moment from 'moment';

export default class Summary extends React.Component {
    render() {
        console.log(moment().format());
		return (
            <Container fluid style={{height: "100%",}}>
                <Row>
                    <Col xs='3'>
                        <WeatherBox weekNum={this.props.weekNumber} startWeek="2/11" endWeek="2/17" degrees={64} weatherCondition="Partly Cloudy"/>
                        <SuggestedEvents/>
                    </Col>
                    <Col xs='9'>
                        <StandardCalendar style={StandardCalendarStyle} startTime={moment().format()}/>
                        <Row>
                            <Col>
                                <Portal/>
                            </Col>
                            <Col>
                                <Portal/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
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
