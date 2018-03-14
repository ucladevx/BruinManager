import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fbLogo from './fbLogo.png';
import gmailLogo from './gmailLogo.png';
import Logo from './SignikaNegative.png';
import FormBox from '../FormBox/FormBox.js';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';
import './LoginBoxStyle.css';

export default class LoginBox extends Component {
    render() {
        return (
            <div style={styles.loginDisplayWrapper}>
                           <div style={styles.logoHeader}>
                               <div style={styles.logoWrapper}>
                                   <img src={Logo} style={styles.logoStyle}/>
                               </div>
                           </div>
                           <div style={styles.interface}>
                               <div style={styles.loginInfo}>
                                   <div style={styles.thirdPartyLogin}>
                                       <div style={{display: "flex", flexDirection:"column", height: "100%", justifyContent: "space-around",alignItems:"flex-start",}}>
                                           <FacebookLogin
                                             appId="185794305530394"
                                             autoLoad={true}
                                             fields="name,email,picture"
                                             onClick={this.componentClicked}
                                             callback={this.responseFacebook}
                                             render={renderProps => (
                                                 <button style={{width: "100%", height: "30%", backgroundColor: "#475993", color: "#FFFFFF"}} onClick={renderProps.onClick}>
                                                   <div style={{display:"flex", width:"100%"}}>
                                                       <div style={{width:"15%"}}>
                                                           <img src={fbLogo} style={{width: 20, height: 20,}}/>
                                                       </div>
                                                       <div style={{width:"85%", display:"flex", justifyContent:"center"}}>
                                                           <span> Login with Facebook </span>
                                                       </div>
                                                   </div>
                                                 </button>
                                             )} />
                                           <GoogleLogin
                                             clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                             buttonText="Login"
                                             onSuccess={this.responseGoogle}
                                             onFailure={this.responseGoogle}
                                             style={{width: "100%", height: "30%", backgroundColor: "#DF4B38", color: "#FFFFFF"}}>
                                             <div style={{display:"flex", width:"100%"}}>
                                                 <div style={{width:"15%"}}>
                                                     <img src={gmailLogo} style={{width: 20, height: 20,}}/>
                                                 </div>
                                                 <div style={{width:"85%", display:"flex", justifyContent:"center"}}>
                                                     <span> Login with Google</span>
                                                 </div>
                                             </div>
                                           </GoogleLogin>
                                       </div>
                                   </div>
                                   <div style={styles.lineDivider}>
                                       <div style={{width: 1, height: 70, border: "1px solid #919191"}}/>
                                       <span style={{color: "#919191", marginTop: 7, marginBottom: 7,}}>OR</span>
                                       <div style={{width: 1, height: 70, border: "1px solid #919191"}}/>
                                   </div>
                                   <div style={styles.firstPartyLogin}>
                                       <FormBox title="Email" inputType="text"/>
                                       <FormBox title="Password" inputType="password"/>
                                       <Link to="/dashboard"> <button class="hoverDark">Login</button> </Link>
                                   </div>
                               </div>
                               <div style={styles.circleDivider}>
                                   <div><span>OR</span></div>
                               </div>
                               <div style={styles.createWrapper}>
                                   <a href="" style={{color: "#000000", fontFamily: "Roboto", textDecoration: "none", borderBottom: "3px dashed #0096EB"}}>Create an Account</a>
                               </div>
                               <div style={styles.forgotWrapper}>
                                   <a href="" style={{color: "#919191", marginTop: 20, fontFamily: "Roboto", textDecoration: "none"}}>forgot your password?</a>
                               </div>
                           </div>
                       </div>
        );
    }
}

let styles = {
    loginDisplayWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 570,
        height: 500,
        backgroundColor: "rgba(219, 219, 219, 1)",
        borderRadius: 20,
        boxShadow: "0px 23px 34px rgba(0, 0, 0, 0.25)",
    },
    logoHeader: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#FFFFFF",
        height: "40%",
        boxShadow: "0px 3px 16px rgba(0, 0, 0, 0.19)",
    },
    logoStyle: {
        width: 350,
        height: "30%",
    },
    interface: {
        width: "95%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 25,
    },
    loginInfo: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
    },
    thirdPartyLogin: {
        width: "45%",
    },
    lineDivider: {
        width: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    firstPartyLogin: {
        width: "45%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    loginSetup: {
        display: "flex",
        width: "100%",
        height: "30%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    circleDivider: {
        borderRadius: "50%",
        width: 50,
        height: 50,
        border: "2px solid #919191",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    createWrapper: {

    },
    forgotWrapper: {

    },
}
