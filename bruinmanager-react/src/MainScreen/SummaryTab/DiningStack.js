import React, { Component } from 'react';
import DiningTitle from './DiningTitle';
import DiningItem from './DiningItem';
export default class DiningStack extends React.Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <DiningTitle title="Dining Hall"/>
                <DiningItem name = "BPlate" status = "OPEN" time = "until 8PM"/>
                <DiningItem name = "Covel" status = "CLOSED" time = "for the day"/>
                <DiningItem name = "De Neve" status = "OPEN" time = "until 8PM"/>
                <DiningItem name = "Feast" status = "CLOSED" time = "for the day"/>
                <DiningTitle title="Quick Service"/>
                <DiningItem name = "Bruin Cafe" status = "OPEN" time = "until 10PM"/>
                <DiningItem name = "Cafe 1919" status = "CLOSED" time = "for the day"/>
                <DiningItem name = "Rendezvous" status = "OPEN" time = "opens at 9PM"/>
                <DiningItem name = "The Study" status = "CLOSED" time = "until 2AM"/>
            </div>
        );
    }
}

let styles = {
    wrapper: {
        marginTop: 25,
        width: "100%",
        height: 200,
    },
}
