import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Background from './images/royce_hall_background.jpg';
import Logo from './images/SignikaNegative.png';
import FormBox from '../Components/FormBox.js';
import './LoginButton.css';
export default class LoginScreen extends Component {
    render() {
        return (
            <Container fluid style={{height: "100vh"}}>
                <Row style={{height: "100vh"}}>
                    <Col style={{background: "linear-gradient(218.66deg, #2A57B8 48.12%, #0096EB 93.89%)", color: "white"}}>
                        <Container fluid>
                            <Row style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                                <Col xs="1"></Col>
                                <Col xs="10">
                                    <Row>
                                        <Col style={{marginBottom: 50}}>
                                            <h1 style={{marginBottom: 25, fontFamily: "Signika Negative"}}>BruinManager for busy Bruins</h1>
                                            <p style={{fontFamily: "Signika Negative",}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </Col>'
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h1 style={{marginBottom: 25, fontFamily: "Signika Negative"}}>Features</h1>
                                            <Container fluid style={{fontFamily: "Signika Negative",}}>
                                                <Row>
                                                    <Col>
                                                        <h4>Calendar</h4>
                                                        <ul>
                                                            <li>point1</li>
                                                            <li>point2</li>
                                                            <li>point3</li>
                                                            <li>point4</li>
                                                        </ul>
                                                    </Col>
                                                    <Col>
                                                        <h4>Newsfeed</h4>
                                                        <ul>
                                                            <li>point1</li>
                                                            <li>point2</li>
                                                            <li>point3</li>
                                                            <li>point4</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4>Reminders</h4>
                                                        <ul>
                                                            <li>point1</li>
                                                            <li>point2</li>
                                                            <li>point3</li>
                                                            <li>point4</li>
                                                        </ul>
                                                    </Col>
                                                    <Col>
                                                        <h4>Dining</h4>
                                                        <ul>
                                                            <li>point1</li>
                                                            <li>point2</li>
                                                            <li>point3</li>
                                                            <li>point4</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <ul>
                                            <li>download our chrome extension!</li>
                                        </ul>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="1"></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs="4" style={{display: "flex", height: "100%", border: "1px solid blue"}}>
                        <div style={styles.loginBox}>
                            <img src={Logo} style={{height: 50, marginBottom: 35,}}/>
                            <FormBox title="Email" inputType="text"/>
                            <FormBox title="Password" inputType="password"/>
                            <div style={styles.buttonBox}>
                                <Link to="/dashboard">
                                    <button class="hoverDark">Sign in</button>
                                </Link>
                                <p style={{marginBottom: 15, marginTop: 15, fontFamily: "Roboto"}}>OR</p>
                                <Link to="/signup" style={{textDecoration: "none"}}>
                                    <a href="" style={{color: "#000000", fontFamily: "Roboto", textDecoration: "none"}}>Create an Account</a>
                                </Link>
                                <a href="" style={{color: "#ABABAB", marginTop: 20, fontFamily: "Roboto", textDecoration: "none"}}>forgot your password?</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

let styles = {
    loginBoxWrapper: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        //background: `rgba(245, 245, 245, 1)`,
        border: "1px solid grey",
    },
    loginBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    logoBox: {
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 75,
    },
    textLogo: {
        fontSize: 50,
        color: "rgb(43, 167, 234)",
        marginBottom: 0,
    },
    buttonBox: {
        display: "flex",
        width: "100%",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    /*
    <div>
        <img src={Logo} alt="" style={styles.logo}/>
    </div>
    <div>
        <div style={styles.form}>
            <Form>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="Email"  />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword"  />
                </FormGroup>
            </Form>
        </div>
    </div>
    <div style={styles.buttonWrapper}>
        <Button color="primary">Login</Button>{' '}
        <a href = "">Create an Account</a>
    </div>

    */

};
