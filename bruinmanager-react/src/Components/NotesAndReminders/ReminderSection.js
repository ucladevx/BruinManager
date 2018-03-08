import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ReminderSection extends React.Component {
  render() {
    return (
      <div style={styles.overview}>
        <div style={styles.inlined}>
          <p style={{...styles.title, ...styles.inlined}}>Reminders</p>
        </div>
        <div style={styles.highlightBorder} />
        <div style={styles.reminderList}>
          <div>
            <input type="checkbox"/>&nbsp;&nbsp;Reminder to do something
          </div>
          <div>
            <input type="checkbox"/>&nbsp;&nbsp;Go to discussion 10:00AM
          </div>
          <p>+</p>
        </div>
      </div>
    )
  }
}

let styles = {
  highlightBorder: {
    borderBottom: "1px solid #CFCFCF",
  },
  inlined: {
    display: "inline",
    paddingLeft: 5,
    paddingRight: 5,
  },
  overview: {
    marginTop: 25,
    height: "100%",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    textAlign: "center",
  },
  reminderItem: {
    display: "inline-block",
  },
  reminderList: {
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  }
}
