import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Background from './images/royce_hall_background.jpg';
import Logo from './images/SignikaNegative.png';
import FormBox from '../Components/FormBox/FormBox.js';
import './LoginButton.css';
import LandingScreen from './LandingScreen';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';

class LoginScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {
        fbdata: null
      }
      this.componentClicked = this.componentClicked.bind(this);
      this.responseFacebook = this.responseFacebook.bind(this);
    }

    componentClicked(e) {
      e.preventDefault();
      this.props.history.push('/dashboard');
    }

    responseFacebook(response) {
      // store email, name, and id
      let fb = {
        "name": response.name,
        "email": response.email,
        "id": response.userID
      };

      let url = "https://arcane-cove-10079.herokuapp.com/post/userFB";
      fetch(url, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(fb)
      }).then(response => {
        return response.json();
      }).then(data => {
        localStorage.setItem('myBMData', data);
        this.setState({
          fbdata: data
        });
        // var bmdata = localStorage.getItem('myBMData');
        // console.log(bmdata.id);
      })
    }

    responseGoogle(response) {
      console.log(response);
    }

    render() {
        return (
            <Container fluid style={{height: "100vh"}}>
                <Row style={{height: "100vh"}}>
                    <Col style={{background: "linear-gradient(218.66deg, #2A57B8 48.12%, #0096EB 93.89%)", color: "white"}}>
                        <LandingScreen/>
                    </Col>
                    <Col xs="4" style={{display: "flex", height: "100%"}}>
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
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default withRouter(LoginScreen);

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

/*
in case we need actual signups again
render() {
    return (
        <Container fluid style={{height: "100vh"}}>
            <Row style={{height: "100vh"}}>
                <Col style={{background: "linear-gradient(218.66deg, #2A57B8 48.12%, #0096EB 93.89%)", color: "white"}}>
                    <LandingScreen/>
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
*/
