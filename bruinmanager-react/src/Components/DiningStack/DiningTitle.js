import React from 'react';
import './DiningTitle.scss';
import {List} from 'semantic-ui-react';
export default class DiningTitle extends React.Component {
    render(props) {
        return (
    <List.Item className="diningTitle-style-title">
      <List.Content>
        <List.Header >
            <div >
                <h1 className="diningTitle-title-text">{this.props.title}</h1>
            </div>
        </List.Header >
      </List.Content>
    </List.Item>);
    }
}
