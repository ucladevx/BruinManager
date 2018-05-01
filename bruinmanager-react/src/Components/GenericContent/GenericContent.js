import React from 'react';
import NavBar from '../NavBar/NavBar';
//import Footer from '../Footer/Footer';
import './GenericContent.scss';
//import GenericDrawer from '../GenericDrawer/GenericDrawer';
export default class GenericContent extends React.Component {

  render(props) {      
    return (
        <div className="generic-content-style-wrapper">
            <div className="navbar-wrapper">
                <div className="navbar-padding">
                    <NavBar activeItem = {this.props.activeItem}/>
                </div>
            </div>
            <div className="content-wrapper">
                {this.props.children}
            </div>
        </div>
    );
  }
}