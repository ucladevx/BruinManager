import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Logo from './bruinhub-wordmark.png';
//import Typography from '@material-ui/core/Typography';
//import GenericContent from '../Components/GenericContent/GenericContent';
const drawerWidth = 300;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    height: '90%',
  },
});

class ResponsiveMainScreen extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render(props) {
    console.log(this.props);
    const { classes, theme, specificContent, specificDrawer } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Button color="secondary" component={Link} to="/dashboard">Dashboard</Button>
            <Button color="secondary" component={Link} to="/calendar">Calendar</Button>
            <Button color="secondary" component={Link} to="/settings">Settings</Button>
            <Button color="secondary" component={Link} to="/help">Help</Button>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {specificDrawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {specificDrawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar}/>
          {specificContent}
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(ResponsiveMainScreen);