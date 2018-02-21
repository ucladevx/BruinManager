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
                                <p style={{fontFamily: "Signika Negative",}}>UCLA is a really happening place, sometimes too happening. We try to make this easier for you by building a platform to organise your college experience by placing all your essentials in one place. You get your own personalised calendar integrated with myUCLA, alerts when your favourite food is on the menu at a dining hall and get to see exciting events happening at UCLA.
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
                                <p style={{fontFamily: "Roboto"}}><br/>Download our chrome extension!<br/><br/>Why?<br/><br/>Our Chrome extension allows us, with your permission, to sync your BruinManager calendar with your myUCLA data.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="1"></Col>
                </Row>
            </Container>
        );
    }
}
