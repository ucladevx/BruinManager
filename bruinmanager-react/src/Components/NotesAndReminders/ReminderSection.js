import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ReminderSection extends React.Component {
  render() {
    return (
      <div style={styles.overview}>
        <div className='color2txt color1' style={{paddingTop: 15, marginTop: -25}}>
          <div className='reminder-header' style={styles.inlined}>
            <h1 style={{...styles.title, ...styles.inlined}}>Reminders</h1>
          </div>
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
    borderRight: "1px solid #CFCFCF"
  },
  title: {
    marginTop: 20,
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
