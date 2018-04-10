import React, { Component } from 'react';
import './TabButton.scss';
export default class TabButton extends React.Component {
	handleClick = () => {
		console.log("Clicked")
	}

	render() {
		return (
			<div onClick={this.handleClick} className="tab-container">
				<h1>
					{this.props.tabName}
				</h1>
			</div>
		);
	}
}
