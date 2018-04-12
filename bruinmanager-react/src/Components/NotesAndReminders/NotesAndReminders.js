import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NotesSection from './NotesSection';
import ReminderSection from './ReminderSection';
import './notesReminders.scss';

export default class NotesAndReminders extends React.Component {
  render() {
    return (
      <div className='notes-and-reminders-section' style={styles.background}>
        <Container fluid style={{height: "100%", padding: "0 0 0 0"}}>
          <Row noGutters style={{height: "100%"}}>
            <Col xs="4" style={styles.reminderSection}>
              <ReminderSection />
            </Col>
            <Col xs="8" style={styles.todoSection}>
              <NotesSection />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

let styles = {
	background: {
        overflowY: "none",
        marginBottom: -25,
        height: "100%",
        width:'100%',
	},
  reminderSection: {
    height: "100%",
  },
  todoSection: {
    height: "100%",
  }
}
