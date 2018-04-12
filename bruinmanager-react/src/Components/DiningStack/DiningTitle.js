import React, { Component } from 'react';
import './DiningTitle.scss';
export default class DiningTitle extends React.Component {
    render(props) {
        return (
            <div className="diningTitle-style-title">
                <p className="diningTitle-title-text">{this.props.title}</p>
            </div>
        );
    }
}
