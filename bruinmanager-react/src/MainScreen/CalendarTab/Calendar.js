import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import StandardCalendar from '../../Components/StandardCalendar';
import WeekCalendarStyle from '../../Components/StandardCalendar.css';
import moment from 'moment';
export default class Calendar extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
            <Col xs="1" style={{border: "1px solid black"}}>
            </Col>
            <Col xs="11" style={{maxHeight: 700,}}>
                <StandardCalendar style={WeekCalendarStyle} startTime={moment({h: 0, m: 0})} isSmall={false} weekNum={1}/>
            </Col>
        </Row>
      </Container>
    )
  }
}
