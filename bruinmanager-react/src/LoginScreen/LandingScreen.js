import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class LandingScreen extends Component {
    render() {
        return(
            <Container fluid>
                <Row style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                    <Col xs="1"></Col>
                    <Col xs="10">
                        <Row>
                            <Col style={{marginBottom: 50}}>
                                <h1 style={{marginBottom: 25, fontFamily: "Signika Negative"}}>BruinManager for busy Bruins</h1>
                                <p style={{fontFamily: "Signika Negative",}}> 
                                <br/><br/>You won’t need another app to manage your life as a Bruin.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 style={{marginBottom: 25, fontFamily: "Signika Negative"}}>Features</h1>
                                <Container fluid style={{fontFamily: "Signika Negative",}}>
                                    <Row>
                                        <Col>
                                            <h4>Calendar</h4>
                                        </Col>
                                        <Col>
                                            <h4>News Feed</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h4>Reminders</h4>
                                        </Col>
                                        <Col>
                                            <h4>Dining</h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{fontFamily: "Roboto"}}><br/>Download our BruinManager chrome extension!<br/><br/>Why?<br/><br/>This enables real-time syncing. We scrape your myUCLA data, with your permission, and send this straight to your calendar automatically. If you don’t use Chrome, you can upload an ICS file from myUCLA instead! .</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="1"></Col>
                </Row>
            </Container>
        );
    }
}
