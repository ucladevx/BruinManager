import React, { Component } from 'react';
import './DiningItem.scss';

export default class DiningItem extends React.Component {
    render(props) {
        return (
            <div className="diningItem-wrapper">
                <div className="dinintItem-name">
                    <p>{this.props.name}</p>
                </div>
                <div className="dinintItem-info">
                    <p className="dinintItem-status">{this.props.status}</p>
                    <p className="dinintItem-time">{this.props.time}</p>
                </div>
            </div>
        );
    }
}