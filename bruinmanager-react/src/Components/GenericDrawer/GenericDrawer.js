import React from 'react';
import Drawer from 'material-ui/Drawer';
import './GenericDrawer.scss';
export default class GenericDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, docked: true};
  }

  render() {
    return (
            <Drawer width = "25%" open={this.state.open}>
                <div className="generic-drawer-style-wrapper">
                    <div className="padding-wrapper">
                        <div className="logo-wrapper">LOGO</div>
                        {this.props.children}
                        <div />
                    </div>
                </div>
            </Drawer>
    );
  }
}