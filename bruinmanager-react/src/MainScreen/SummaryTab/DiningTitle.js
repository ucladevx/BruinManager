import React, { Component } from 'react';

export default class DiningTitle extends React.Component {
    render(props) {
        return (
            <div style={styles.title}>
                <p style={{margin: "0 0 0 0", padding: "0 0 0 0", marginLeft: 10, paddingBottom: 0}}>{this.props.title}</p>
            </div>
        );
    }
}

let styles = {
    title: {
        border: "1px solid #CFCFCF",
        display: "flex",
        alignItems: "center",
        height: 20,
        fontSize: 16,
    }
}
