import React, { Component } from 'react';
import { Button } from 'reactstrap';
import clearStar from './clear-star.png';
import yellowStar from './yellow-star.png';

export default class StarButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false,
        }
    }

    toggleColor = () => {
        this.setState({
            isToggle: !this.state.isToggle,
        });
    }

    render() {
        let currentStar = this.state.isToggle ? yellowStar : clearStar;
        console.log(this.state.isToggle);
        return (
            <div onClick={this.toggleColor} style={{backgroundImage: `url(${currentStar})`, backgroundSize: "20px 20px, height: 20px, width: 20px,"}}></div>
        );
    }

}