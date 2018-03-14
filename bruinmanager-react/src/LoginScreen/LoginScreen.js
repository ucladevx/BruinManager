import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Icon from './images/Vector.png';
import Logo from './images/SignikaNegative.png';
import combineLogo from './images/logo_bm.png';
import LoginBox from '../Components/LoginBox/LoginBox.js';
import LandingInfo from './LandingInfo';
import FontAwesome from 'react-fontawesome';

export default class LoginScreen extends Component {

    render() {
        return (
            <div style={styles.landingWrapper}>
                <div style={styles.navBar}>
                    <div style={styles.navContent}>
                        <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                            <img src={Icon} style={{height: 40, marginRight: 15,}}/>
                            <img src={Logo} style={{height: 35, marginTop: 15,}}/>
                        </div>
                        <div>
                            <NavLink to="/">
                              Home
                            </NavLink>
                            <NavLink to="/team">
                              Team
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div style={styles.landingInfo}>
                    <LandingInfo/>
                </div>
                <div style={styles.login}>
                    <LoginBox storeData={this.props.storeData}/>
                </div>
            </div>
        );
    }
}

let styles = {
    landingWrapper: {
        height: "100%",
        width: "100%",
        background: "linear-gradient(239.12deg, rgba(75, 106, 173, 0.58) 16.86%, rgba(46, 166, 236, 0.58) 92.6%), linear-gradient(218.66deg, #2A57B8 48.12%, #0096EB 93.89%)",
        display: "grid",
        gridTemplateColumns: "repeat(24, 1fr)",
        gridTemplateRows: "75px 1fr",
    },
    navBar: {
        gridColumn: "1/25",
        gridRow: "1/2",
        backgroundColor: "white",
        boxShadow: "0px 9px 16px rgba(0, 0, 0, 0.25)",
        display:"grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridTemplateRows: "1fr",
    },
    navContent: {
        gridColumn: "2/12",
        gridRow: "1/2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    landingInfo: {
        gridColumn: "3/14",
        gridRow: "2/3",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    login: {
        gridColumn: "15/23",
        gridRow: "2/3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

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

/*
in case we need actual signups again
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




<div style={styles.loginBox}>
    <img src={Logo} style={{height: "4vw", marginBottom: 35,}}/>
    <div style={styles.buttonBox}>
        <Link to="/dashboard">
            <button class="hoverDark">Placeholder button to dashboard</button>
        </Link>
        <FacebookLogin
          appId="185794305530394"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook"
          textButton="Login with Facebook"
        />
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        >
        <FontAwesome
          name='google'
        />
        <span> Login with Google</span>
        </GoogleLogin>
    </div>
</div>
*/
