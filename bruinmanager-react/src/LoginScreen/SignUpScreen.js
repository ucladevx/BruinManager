import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Logo from './images/SignikaNegative.png';
import FormBox from '../Components/FormBox/FormBox.js';
import './LoginButton.css';
import LandingInfo from './LandingInfo';
export default class LoginScreen extends Component {
    render() {
        return (
            <Container fluid style={{height: "100vh"}}>
                <Row style={{height: "100vh"}}>
                    <Col style={{background: "linear-gradient(218.66deg, #2A57B8 48.12%, #0096EB 93.89%)", color: "white"}}>
                        <LandingInfo/>
                    </Col>
                    <Col xs="4" style={{display: "flex", height: "100%"}}>
                        <div style={styles.loginBox}>
                            <img src={Logo} style={{height: "4vw", marginBottom: 35,}}/>
                            <FormBox title="First Name" inputType="text"/>
                            <FormBox title="Last Name" inputType="text"/>
                            <FormBox title="Email" inputType="text"/>
                            <FormBox title="Password" inputType="password"/>
                            <div style={styles.buttonBox}>
                                <Link to="/dashboard">
                                    <button class="hoverDark">Sign up</button>
                                </Link>
                                <Link to="/" style={{marginTop: 20, textDecoration: "none"}}>
                                    <a href="" style={{color: "#000000", fontFamily: "Roboto", textDecoration: "none"}}>Cancel</a>
                                </Link>
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
        <Button color="primary">Sign{' '}up</Button>
        <a href = "">Cancel</a>
    </div>

    */

};
