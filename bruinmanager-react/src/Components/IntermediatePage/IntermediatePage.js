import React from 'react';
import Stepper from './IntermediatePageStepper';
import Paper from '@material-ui/core/Paper';
import './IntermediatePage.scss';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
  });
  
  function IntermediatePage(props) {
    const { classes } = props;
    return (
      <div className="intermediate-page-wrapper">
        <Paper className={classes.root} elevation={4}>
            <Stepper />
        </Paper>
      </div>
    );
  }
  
  export default withStyles(styles)(IntermediatePage);