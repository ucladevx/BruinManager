import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Note extends React.Component {
  removeParent(e) {
    this.remove();
  }

  render() {
    return (
      <div>
        <p style={styles.inlined}>X</p>
        <div style={{...styles.spacing, ...styles.inlined}}></div>
        <p style={styles.inlined}>Note #1 name</p>
        <div style={styles.rightText}>
          <p style={styles.inlined}>{this.props.currentDate}</p>
        </div>
      </div>
    )
  }
}

let styles = {
  inlined: {
    display: "inline"
  },
  spacing: {
    marginLeft: 10,
    marginRight: 10,
  },
  rightText: {
    float: "right",
    textAlign: "right",
  },
}
