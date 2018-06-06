import React from 'react';
import { Link } from 'react-router-dom';
import './IntermediatePage.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MultiChip from './MultiChipSelect';
import Dropper from './IntermediatePageDrop';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  intermediateContentWrapper: {
    width: '80%',
    height: '80%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Welcome', 'MyUCLA Data', 'Hours of Operation', 'Club Events'];
}

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
      <MultiChip />
    </div>
  )
}
const Step3 = () => {
  return(
    <div className = "intermediate-page-content-wrapper">
      <h3>Club Events</h3>
      <p>Choose which clubs’ events you would like to see on your newsfeed.</p>
      <MultiChip/>
    </div>
  )
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step0 />;
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    default:
      return 'Unknown step';
  }
}

class HorizontalLinearStepper extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  state = {
    activeStep: 0,
    skipped: new Set(),
  };

  isStepOptional = step => {
    return false;
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    const skipped = new Set(this.state.skipped.values());
    skipped.add(activeStep);
    this.setState({
      activeStep: this.state.activeStep + 1,
      skipped,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.intermediateContentWrapper}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div className = "intermediate-page-content-wrapper-finished">
              <p>
                All steps completed - you're finished!
              </p>
              <Link to="/dashboard">
                <Button
                    variant="raised"
                    color="primary"
                    className={classes.button}>
                    Go to Dashboard!
                  </Button>
              </Link>
            </div>
          ) : (
            <div>
              <div style={{margin: 25}}>
                {getStepContent(activeStep)}
              </div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="raised"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="raised"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HorizontalLinearStepper);
