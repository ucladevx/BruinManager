import React, { Component } from 'react';
import './DiningItem.scss';

export default class DiningItem extends React.Component {
    render(props) {
        return (
            <div className="wrapper">
                <div className="name">
                    <p>{this.props.name}</p>
                </div>
                <div className="info">
                    <p className="status">{this.props.status}</p>
                    <p className="time">{this.props.time}</p>
                </div>
            </div>
        );
    }
}