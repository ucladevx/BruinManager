import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';
import Note from './Note';

export default class NotesSection extends React.Component {
  render() {
    return (
      <div style={styles.overview}>
        <div style={{backgroundColor: "#0096EB", paddingTop: 15, marginTop: -25}}>
          <div style={styles.inlined}>
            <p style={{...styles.title, ...styles.inlined}}>Notes</p>
            <p style={{...styles.inlined, ...styles.rightText}}>Edit</p>
          </div>
        </div>
        <div style={styles.highlightBorder}/>
        <div style={styles.notesList}>
          <Note currentDate={moment().format("MM/DD/YYYY")} />
          <Note currentDate={moment().format("MM/DD/YYYY")} />
          <Note currentDate={moment().format("MM/DD/YYYY")} />
        </div>
      </div>
    )
  }
}

let styles = {
  highlightBorder: {
    borderBottom: "1px solid #CFCFCF",
  },
  spacing: {
  },
  inlined: {
    display: "inline",
    paddingLeft: 5,
    paddingRight: 5,
  },
  notesList: {
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  overview: {
    marginTop: 25,
  },
  rightText: {
    float: "right",
    textAlign: "right",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
  },
}
