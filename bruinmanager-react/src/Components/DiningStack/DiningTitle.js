import React, { Component } from 'react';
import './DiningTitle.scss';
import {List} from 'semantic-ui-react';
export default class DiningTitle extends React.Component {
    render(props) {
        return (
    <List.Item className="diningTitle-style-title">
      <List.Content>
        <List.Header >
            <div >
                <p className="diningTitle-title-text">{this.props.title}</p>
            </div>
        </List.Header >
      </List.Content>
    </List.Item>);
    }
}
