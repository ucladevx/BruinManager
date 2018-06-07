import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './IntermediatePage.scss';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dropper from './IntermediatePageDrop';

const Step0 = () => {
    return(
      <div className = "intermediate-page-content-wrapper">
        <h3>Welcome to BruinHub!</h3>
        <p>Let's help you get started by customizing your preferences.</p>
      </div>
    )
  }
  const Step1 = () => {
    return(
      <div className = "intermediate-page-content-wrapper">
        <h3>Linking MyUCLA Data</h3>
        <p>You can use <a href="https://chrome.google.com/webstore/search/bruinhub" target="_blank">this</a> Chrome Extension to link your class data.</p>
        <p>Download it and head over to <a href="https://shb.ais.ucla.edu/shibboleth-idp/profile/SAML2/Redirect/SSO?execution=e1s2" target="_blank">MyUCLA</a> and allow the extension to scrap your data.</p>
        <p>You can also upload the .ics file that you can get from <a href="https://shb.ais.ucla.edu/shibboleth-idp/profile/SAML2/Redirect/SSO?execution=e1s2" target="_blank">MyUCLA</a> by clicking or dragging the file to the box below.</p>
        <Dropper />
      </div>
    )
  }
  const Step2 = () => {
    return(
      <div className = "intermediate-page-content-wrapper">
        <h3>Hours of Operation</h3>
        <p>Choose the hours of operations for the dining options and/or libraries you would like to see.</p>
      </div>
    )
  }
  const Step3 = () => {
    return(
      <div className = "intermediate-page-content-wrapper">
        <h3>Club Events</h3>
        <p>Choose which clubs’ events you would like to see on your newsfeed.</p>
      </div>
    )
  }

class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Step0/>;
      case 1:
        return <Step1/>;
      case 2:
        return <Step2/>;
        case 3:
        return <Step3/>;
      default:
        return "how did you get here?";
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Welcome</StepLabel>
          </Step>
          <Step>
            <StepLabel>MyUCLA Data</StepLabel>
          </Step>
          <Step>
            <StepLabel>Hours of Operation</StepLabel>
          </Step>
          <Step>
            <StepLabel>Club Events</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
                <Link to="/dashboard">
                    <RaisedButton
                        label="Go to Dashboard!"
                        primary={true}/>
                </Link>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 3 ? 'Finish' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HorizontalLinearStepper;