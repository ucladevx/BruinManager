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
                            <Col style={{marginBottom: 10}}>
                                <h1 style={{marginBottom: 10, fontFamily: "Signika Negative"}}>BruinManager for busy Bruins</h1>
                                <p style={{fontFamily: "Signika Negative",}}>
                                You won’t need another app to manage your life as a Bruin.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 style={{marginBottom: 10, fontFamily: "Signika Negative"}}>Features</h1>
                                <Container fluid style={{fontFamily: "Signika Negative",}}>
                                    <Row>
                                        <Col>
                                            <h4>Calendar</h4>
                                            <ul>
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
                                            <h4>News Feed</h4>
                                            <ul>
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
                                            <h4>Reminders</h4>
                                            <ul>
                                                <li>
                                                    Add what you like
                                                </li>
                                                <li>
                                                    Text alerts for enrollment appointments
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <h4>Dining</h4>
                                            <ul>
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
                                <p style={{fontFamily: "Roboto"}}><br/>Download our Chrome extension 'BruinManager' to enable real-time syncing. We scrape your myUCLA data, with your permission, and send this straight to your calendar automatically.<br/><br/>If you don’t use Chrome, you can upload an ICS file from myUCLA instead!</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
