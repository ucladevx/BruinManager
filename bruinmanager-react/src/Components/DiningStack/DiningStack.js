import React, { Component } from 'react';
import DiningTitle from './DiningTitle';
import DiningItem from './DiningItem';
import './DiningStack.scss';
import {List} from 'semantic-ui-react';
export default class DiningStack extends React.Component {
    render(props) {
        return (
            <div className="diningStack-style-wrapper">
            <List divided relaxed>
                <DiningTitle title="Dining Hall"/>
                <DiningItem name = "BPlate" status = "OPEN" time = "until 8PM"/>
                <DiningItem name = "Covel" status = "CLOSED" time = "for today"/>
                <DiningItem name = "De Neve" status = "OPEN" time = "until 8PM"/>
                <DiningItem name = "Feast" status = "CLOSED" time = "for today"/>
                </List>
                <List divided relaxed>
                <DiningTitle title="Quick Service"/>
                <DiningItem name = "Bruin Cafe" status = "OPEN" time = "until 10PM"/>
                <DiningItem name = "Cafe 1919" status = "CLOSED" time = "for today"/>
                <DiningItem name = "Rende" status = "CLOSED" time = "until 9PM"/>
                <DiningItem name = "The Study" status = "OPEN" time = "until 2AM"/>
                </List>
            </div>
        );
    }
}

