import React, { Component } from 'react';

export default class DiningTitle extends React.Component {
    render(props) {
        return (
            <div style={styles.title}>
                <p style={styles.titleText}>{this.props.title}</p>
            </div>
        );
    }
}

let styles = {
    title: {
        border: "1px solid #CFCFCF",
        display: "flex",
        alignItems: "center",
        fontSize: 16,
        backgroundColor: "#0096EB",
    },
    titleText: {
      margin: 10,
      fontSize: 15,
      fontFamily: "Roboto"
    },
}
