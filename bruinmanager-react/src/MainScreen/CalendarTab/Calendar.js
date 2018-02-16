import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import WeekCalendar from '../../Components/WeekCalendar/WeekCalendar';
import WeekCalendarStyle from '../../Components/StandardCalendar.css';
import moment from 'moment';
export default class Calendar extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
            <Col xs="1" style={{border: "1px solid black"}}>

            </Col>
            <Col style={{border: "1px solid red"}}>
                <WeekCalendar style={WeekCalendarStyle}/>
            </Col>
        </Row>
      </Container>
    )
  }
}
