import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Background from './images/royce_hall_background.jpg';
import Logo from './images/bruinmanager.png';
import FormBox from '../Components/FormBox.js';
export default class LoginScreen extends Component {
    render() {
        return (
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
        );
    }
}

let styles = {
    background: {
        position: "fixed",
        left: "-5%",
        top: "-5%",
        backgroundImage: `url(${Background})`,
        opacity: 0.9,
        zIndex: "-1",
        backgroundSize: "cover",
        width: "110%",
        height: "110%",
        webkitFilter: `blur(5px)`,
        mozFilter: `blur(5px)`,
        oFilter: `blur(5px)`,
        msFilter: `blur(5px)`,
        filter: `blur(5px)`,
    },
    loginBoxWrapper: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%)`,
        zIndex: 1,
        background: `rgba(245, 245, 245, 1)`,
        width: 350,
        border: "1px solid grey",
    },
    loginBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //"justify-content": "center",
        width: "100%",
    },
    logoBox: {
        display: "flex",
        width: "100%",
        height: 90,
        alignItems: "center",
        justifyContent: "center",
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
        borderTop: "1px solid grey",
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
