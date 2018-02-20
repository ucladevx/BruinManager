import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';
import Note from './Note';

export default class NotesSection extends React.Component {
  render() {
    return (
      <div style={styles.overview}>
        <div style={styles.inlined}>
          <p style={{...styles.title, ...styles.inlined}}>Notes</p>
          <p style={{...styles.inlined, ...styles.rightText}}>Edit</p>
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
    borderBottom: "1px solid black",
    marginLeft: -20,
    marginRight: -20,
  },
  spacing: {
    marginLeft: 10,
    marginRight: 10,
  },
  inlined: {
    display: "inline"
  },
  notesList: {
    marginTop: 10,
  },
  overview: {
    marginTop: 25,
    height: 400,
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
