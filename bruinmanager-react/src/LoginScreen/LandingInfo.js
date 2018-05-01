import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class LandingScreen extends Component {
    render() {
        return(
            <Container fluid>
                <Row style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                    <Col>
                        <Row>
                            <Col>
                                <h1 style={{marginBottom: 10, fontFamily: "Terminal Dosis", fontSize: "3vmax"}}>Features</h1>
                                <Container fluid style={{fontFamily: "Terminal Dosis",}}>
                                    <Row>
                                        <Col>
                                            <h4 style={{fontSize: "2vmax"}}>Calendar</h4>
                                            <ul style={{fontSize: "1.1vmax"}}>
                                                <li>
                                                    Quarter system oriented
                                                </li>
                                                <li>
                                                    Facebook events
                                                </li>
                                                <li>
                                                    myUCLA class schedules
                                                </li>
                                                <li>
                                                    Midterms and final exams
                                                </li>
                                                <li>
                                                    Dynamic drag-and-drop
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <h4 style={{fontSize: "2vmax"}}>News Feed</h4>
                                            <ul style={{fontSize: "1.1vmax"}}>
                                                <li>
                                                    Cool events at UCLA
                                                </li>
                                                <li>
                                                    Scrollable
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h4 style={{fontSize: "2vmax"}}>Reminders</h4>
                                            <ul style={{fontSize: "1.1vmax"}}>
                                                <li>
                                                    Add what you like
                                                </li>
                                                <li>
                                                    Text alerts for enrollment appointments
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <h4 style={{fontSize: "2vmax"}}>Dining</h4>
                                            <ul style={{fontSize: "1.1vmax"}}>
                                                <li>
                                                    Quick access
                                                </li>
                                                <li>
                                                    Hours of operation
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{fontFamily: "Roboto", fontSize: "1.1vmax",}}><br/>Download our BruinHub Chrome extension to enable real-time syncing. We scrape your myUCLA data, with your permission, and send this straight to your calendar automatically.<br/><br/>If you don’t use Chrome, you can upload an ICS file from myUCLA instead!</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
