import React, { Component } from 'react';

export default class DiningItem extends React.Component {
    render(props) {
        return (
            <div style={styles.wrapper}>
                <div style={styles.name}>
                    <p>{this.props.name}</p>
                </div>
                <div style={styles.info}>
                    <p style={styles.status}>{this.props.status}</p>
                    <p style={styles.time}>{this.props.time}</p>
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
        height: 55,
        width: "100%",
    },
    name: {
        display: "flex",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 500,
        fontSize: 13,
        fontFamily: "Roboto",
    },
    status: {
      fontSize: 15,
      fontFamily: "Roboto",
      marginBottom: 0,
    },
    time: {
      fontSize: 12,
      fontFamily: "Roboto",
      marginBottom: 0,
    },
    info: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        justifyContent: "center",
    },
}
