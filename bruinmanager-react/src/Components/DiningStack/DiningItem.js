import React, { Component } from 'react';
import './DiningItem.scss';

import {Label,List} from 'semantic-ui-react';

export default class DiningItem extends React.Component {
    render(props) {
        return (
<List.Item className='diningItem-style-wrapper '>
      <List.Content>
        <List.Header className='left floated'>{this.props.name}</List.Header>
        <List.Description className='right floated '> <Label className="dinintItem-status">{this.props.status}</Label>
                    <p className="dinintItem-time">{this.props.time}</p></List.Description>
      </List.Content>
    </List.Item>
        );
    }
}