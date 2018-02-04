import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Background from './images/royce_hall_background.jpg';
import Logo from './images/logo_bm.png';
export default class LoginScreen extends Component {
    render() {
        return (
            <div>
                <div style={styles.background}/>
                <div style={styles.loginBoxWrapper}>
                    <div style={styles.loginBox}>
                        <img src={Logo} alt="" style={styles.logo}/>
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
                        <div style={styles.buttonWrapper}>
                            <Button color="primary">Login</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let styles = {
    background: {
        "position": "fixed",
        "left": "-5%",
        "top": "-5%",
        "background-image": `url(${Background})`,
        "opacity": 0.9,
        "z-index": "-1",
        "background-size": "cover",
        "width": "110%",
        "height": "110%",
        "-webkit-filter": `blur(5px)`,
        "-moz-filter": `blur(5px)`,
        "-o-filter": `blur(5px)`,
        "-ms-filter": `blur(5px)`,
        "filter": `blur(5px)`,
    },
    loginBoxWrapper: {
        "position": "fixed",
        "left": "50%",
        "top": "50%",
        "transform": `translate(-50%, -50%)`,
        "z-index": "1",
        "background": "rgba(245, 245, 245, .85)",
        "border-radius": "20px",
    },
    loginBox: {
        "display": "flex",
        "flex-direction": "column",
        //"height": 400,
        //"width": 500,
        //"justify-content": "center",
        "margin": "40px 40px 40px 40px",
        "align-items": "center",
    },
    logo: {
        "width": 300,
        "height": 65,
    },
    form: {
        "margin-top": 10,
        "width": "105%",
    },
    password: {
        "-webkit-text-security": "disc",
    },
    buttonWrapper: {
        "margin-top": 10,
    },
};
