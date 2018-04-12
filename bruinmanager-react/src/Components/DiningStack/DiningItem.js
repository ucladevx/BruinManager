import React, { Component } from 'react';
import './DiningItem.scss';

export default class DiningItem extends React.Component {
    render(props) {
        return (
            <div className="diningItem-style-wrapper">
                <div className="diningItem-name">
                    <p>{this.props.name}</p>
                </div>
                <div className="diningItem-info">
                    <p className="diningItem-status">{this.props.status}</p>
                    <p className="diningItem-time">{this.props.time}</p>
                </div>
            </div>
        );
    }
}