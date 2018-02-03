import React, { Component } from 'react';
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
                            <form>
                                Username:<br/>
                                <input type="text" name="Username"/><br/>
                                Password:<br/>
                                <input type="text" name="Password" style={styles.password}/>
                            </form>
                        </div>
                        <div style={styles.buttonWrapper}>
                            <button>Login</button>
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
        "height": 250,
        "width": 400,
        //"justify-content": "center",
        "margin-top": 40,
        "align-items": "center",
    },
    logo: {
        "width": 300,
        "height": 75,
    },
    form: {
        "margin-top": 10,
    },
    password: {
        "-webkit-text-security": "disc",
    },
    buttonWrapper: {
        "margin-top": 10,
    },
};
