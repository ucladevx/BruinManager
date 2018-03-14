import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import fbLogo from './fbLogo.png';
import gmailLogo from './gmailLogo.png';
import Logo from './SignikaNegative.png';
import FormBox from '../FormBox/FormBox.js';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';
import './LoginBoxStyle.css';

class LoginBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fbdata: null
      }
      this.componentClicked = this.componentClicked.bind(this);
      this.responseFacebook = this.responseFacebook.bind(this);
    }

    componentClicked(e) {
      //e.preventDefault();

    }

    responseFacebook(response) {
      // store email, name, and id
      console.log(response.picture.data.url);
      let fb = {
        "name": response.name,
        "email": response.email,
        "id": response.userID,
        "picture": response.picture.data.url,
      };

      localStorage.setItem('myBMData', "fbData":{fb});

      let url = "https://arcane-cove-10079.herokuapp.com/post/userID";
      fetch(url, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(fb)
      }).then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
        this.setState({
          fbdata: data
        });
        // var bmdata = localStorage.getItem('myBMData');
        // console.log(bmdata.id);
        return data;
      }).then((res) => {
        this.props.storeData(res);
        this.props.history.push('/dashboard');
      })
    }

    responseGoogle(response) {
      console.log(response);
    }

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
                                                 <button style={{width: "100%", height: "30%", backgroundColor: "#475993", color: "#FFFFFF", border: "none"}} onClick={renderProps.onClick}>
                                                   <div style={{display:"flex", width:"100%"}}>
                                                       <div style={{width:"15%"}}>
                                                           <img src={fbLogo} style={{width: "2vmax", height: "2vmax",}}/>
                                                       </div>
                                                       <div style={{width:"85%", display:"flex", justifyContent:"center", alignItems: "center", fontSize: "1.1vmax", cursor: "pointer",}}>
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
                                             style={{width: "100%", height: "30%", backgroundColor: "#DF4B38", color: "#FFFFFF", border: "none", fontSize: "1.1vmax", cursor: "pointer",}}>
                                             <div style={{display:"flex", width:"100%"}}>
                                                 <div style={{width:"15%"}}>
                                                     <img src={gmailLogo} style={{width: "2vmax", height: "2vmax",}}/>
                                                 </div>
                                                 <div style={{width:"85%", display:"flex", justifyContent:"center", alignItems: "center",}}>
                                                     <span> Login with Google</span>
                                                 </div>
                                             </div>
                                           </GoogleLogin>
                                       </div>
                                   </div>
                                   <div style={styles.lineDivider}>
                                       <div style={{width: 1, height: 50, border: "1px solid #919191"}}/>
                                       <span style={{color: "#919191", marginTop: 7, marginBottom: 7, fontSize: "1.2vmax"}}>OR</span>
                                       <div style={{width: 1, height: 50, border: "1px solid #919191"}}/>
                                   </div>
                                   <div style={styles.firstPartyLogin}>
                                       <FormBox title="Email" inputType="text"/>
                                       <FormBox title="Password" inputType="password"/>
                                       <Link to="/dashboard"><button className="hoverDark">Login</button> </Link>
                                   </div>
                               </div>
                               <div style={styles.circleDivider}>
                                   <div style={{fontSize: "1vmax"}}><span>OR</span></div>
                               </div>
                               <div style={styles.createWrapper}>
                                   <a href="" style={{color: "#000000", fontFamily: "Roboto", fontSize: "1.25vmax", textDecoration: "none", borderBottom: "3px dashed #0096EB"}}>Create an Account</a>
                               </div>
                               <div style={styles.forgotWrapper}>
                                   <a href="" style={{color: "#919191", marginTop: 20, fontFamily: "Roboto", fontSize: "1.25vmax", textDecoration: "none"}}>forgot your password?</a>
                               </div>
                           </div>
                       </div>
        );
    }
}
export default withRouter(LoginBox);

let styles = {
    loginDisplayWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "90%",
        height: "70%",
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
    logoWrapper: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    logoStyle: {
        width: "75%",
        height: "auto",
    },
    interface: {
        width: "95%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
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
        width: "3vmax",
        height: "3vmax",
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
