import React, { Component } from 'react';

export default class LoginScreen extends Component {
    render() {
        return (
            <div style={styles.loginBoxWrapper}>
                <div style={styles.loginBox}>
                    <img src="" alt=""/>
                    <form>
                        Username:<br/>
                        <input type="text" name="Username"/><br/>
                        Password:<br/>
                        <input type="text" name="Password"/>
                    </form>
                    <div style={styles.buttonWrapper}>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

let styles = {
    loginBoxWrapper: {
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
    },
    loginBox: {
        "display": "flex",
        "flex-direction": "column",
        "height": 400,
        "width": 400,
        "justify-content": "center",
        "align-items": "center",
    }
};
