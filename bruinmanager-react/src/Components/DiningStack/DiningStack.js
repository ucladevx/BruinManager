import React from 'react';
import DiningItem from './DiningItem';
import './DiningStack.scss';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Opened from 'material-ui/svg-icons/action/lock-open';
import Closed from 'material-ui/svg-icons/action/lock-outline';
import {red300, green300} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
export default class DiningStack extends React.Component {
    render(props) {
        return (
            <div className="diningStack-style-wrapper">
                <Paper zDepth={1} style={{width: "95%", height: "100%"}} children={
                    <div className="diningStack-style-wrapper">
                        <Tabs style={{width: "50%"}}>
                            <Tab label="Dining Halls">
                                <List>
                                    <ListItem primaryText= "BPlate" secondaryText="open until 8PM" rightIcon={<Opened color={green300}/>}/>
                                    <ListItem primaryText= "Covel" secondaryText="closed for today" rightIcon={<Closed color={red300}/>}/>
                                    <ListItem primaryText= "De Neve" secondaryText="open until 8PM" rightIcon={<Opened color={green300}/>}/>
                                    <ListItem primaryText= "Feast" secondaryText="closed for today" rightIcon={<Closed color={red300}/>}/>
                                </List>
                            </Tab>
                        </Tabs>
                        <Tabs style={{width: "50%"}}>
                            <Tab label="Quick Service">
                                <List>
                                    <ListItem primaryText= "Bruin Cafe" secondaryText="open until 10PM" rightIcon={<Opened color={green300}/>}/>
                                    <ListItem primaryText= "Cafe 1919" secondaryText="closed for today" rightIcon={<Closed color={red300}/>}/>
                                    <ListItem primaryText= "Rende" secondaryText="closed until 9PM" rightIcon={<Closed color={red300}/>}/>
                                    <ListItem primaryText= "The Study" secondaryText="open until 2AM" rightIcon={<Opened color={green300}/>}/>
                                </List>
                            </Tab>
                        </Tabs>
                    </div>
                } />
            </div>
        );
    }
}

