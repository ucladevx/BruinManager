import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Calendar.scss';
import { Container, Row, Col } from 'reactstrap';
import StandardCalendar from '../../Components/StandardCalendar/StandardCalendar.js';
import StandardCalendarStyle from '../../Components/StandardCalendar/StandardCalendar.css';
import moment from 'moment';
export default class Calendar extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
            <Col xs="1" className="week-selector">
            </Col>
            <Col xs="11" className="calendar-content">
                <StandardCalendar style={StandardCalendarStyle} startTime={moment({h: 0, m: 0})} isSmall={false} weekNum={7}/>
            </Col>
        </Row>
      </Container>
    )
  }
}
