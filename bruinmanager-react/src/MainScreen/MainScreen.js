import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom'
import TabButton from '../Components/TabButton';
import Summary from './SummaryTab/Summary';

const SummaryScreen = () => (
	<Summary weekNumber={1}/>
)

export default class MainScreen extends React.Component {
	render() {
		return (
			//<TabButton onClick={this.props.onClick} tabName="Summary"/>
			<Router>
		        <div>
		        	<ul>
		            	<li><Link to="/summary">Summary</Link></li>
		            	<li><Link to="/calendar">Calendar</Link></li>
		            	<li><Link to="/newsfeed">Newsfeed</Link></li>
		            	<li><Link to="/dining">Dining</Link></li>
		        	</ul>

		        	<hr/>

		        	<Route exact path="/summary" component={SummaryScreen}/>
		        </div>
		     </Router>
		);
	}
}
