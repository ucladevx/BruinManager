import React, { Component } from 'react';

export default class DiningItem extends React.Component {
    render(props) {
        return (
            <div style={styles.wrapper}>
                <div style={styles.name}>
                    <p>{this.props.name}</p>
                </div>
                <div style={styles.info}>
                    <p style={{marginBottom: 0}}>{this.props.status}</p>
                    <p style={{marginBottom: 0}}>{this.props.time}</p>
                </div>
            </div>
        );
    }
}

let styles = {
    wrapper: {
        border: "1px solid #CFCFCF",
        borderTop: "none",
        display: "flex",
        height: 60,
        width: "100%",
    },
    name: {
        display: "flex",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    info: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        justifyContent: "center",
    },
}
