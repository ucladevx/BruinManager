import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Background from './images/royce_hall_background.jpg';
import Logo from './images/bruinmanager.png';
import FormBox from '../Components/FormBox.js';
export default class LoginScreen extends Component {
    render() {
        return (
            <Container fluid style={{height: "100vh"}}>
                <Row style={{height: "100vh"}}>
                    <Col xs="8" style={{height: "100vh", border: "1px solid red"}}>

                    </Col>
                    <Col xs="4" style={{display: "flex", height: "100%", border: "1px solid blue"}}>
                        <div style={styles.loginBox}>
                            <p style={styles.textLogo}>bruin<b>manager</b></p>
                            <FormBox title="Username" inputType="text"/>
                            <FormBox title="Password" inputType="password"/>
                            <div style={styles.buttonBox}>
                                <Button outline color="primary">Login</Button>
                                <p style={{margin: "0 0 0 0"}}>OR</p>
                                <a href="">Create an account</a>
                                <a href="">forgot your password?</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
/*
<div>
    <div style={styles.background}/>
    <div style={styles.loginBoxWrapper}>
        <div style={styles.loginBox}>
            <div style={styles.logoBox}>
                <div style={styles.logo}>
                    <p style={styles.textLogo}>bruin<b>manager</b></p>
                </div>
            </div>
            <FormBox title="Username" inputType="text"/>
            <FormBox title="Password" inputType="password"/>
            <div style={styles.buttonBox}>
                <Button outline color="primary">Login</Button>
                <Button color="link">Create an account</Button>
            </div>
        </div>
    </div>
</div>
*/
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
        border: "1px solid green"
    },
    logoBox: {
        display: "flex",
        width: "100%",
        height: "100vh",
        border: "1px solid blue",
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
        fontSize: 30,
        color: "rgb(43, 167, 234)",
        marginBottom: 0,
    },
    buttonBox: {
        display: "flex",
        width: "100%",
        height: 100,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
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
