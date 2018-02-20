import React, { Component } from 'react';
import DiningTitle from './DiningTitle';
import DiningItem from './DiningItem';
export default class DiningStack extends React.Component {
    render(props) {
        return (
            <div style={{...{height: this.props.height}, ...styles.wrapper}}>
                <DiningTitle title="Dining Hall"/>
                <DiningItem name = "BPlate" status = "OPEN" time = "until 8PM"/>
                <DiningItem name = "Covel" status = "CLOSED" time = "for today"/>
                <DiningItem name = "De Neve" status = "OPEN" time = "until 8PM"/>
                <DiningItem name = "Feast" status = "CLOSED" time = "for today"/>
                <DiningTitle title="Quick Service"/>
                <DiningItem name = "Bruin Cafe" status = "OPEN" time = "until 10PM"/>
                <DiningItem name = "Cafe 1919" status = "CLOSED" time = "for today"/>
                <DiningItem name = "Rende" status = "CLOSED" time = "until 9PM"/>
                <DiningItem name = "The Study" status = "OPEN" time = "until 2AM"/>
            </div>
        );
    }
}

let styles = {
    wrapper: {
        marginTop: 10,
        width: "100%"
    },
}
