import React, { Component } from 'react';
import { Button } from 'reactstrap';
import clearStar from './clear-star.png';
import yellowStar from './yellow-star.png';

export default class StarButton extends React.Component {
    render() {
        return (
            <div style={{...{backgroundImage: `url(${clearStar})`, backgroundSize: "20px 20px"}, ...styles.star}}></div>
        );
    }

}

let styles = {
    star: {        
        height: 20,
        width: 20,
    },
}
