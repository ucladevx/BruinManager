import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NotesSection from './NotesSection';
import ReminderSection from './ReminderSection';

export default class NotesAndReminders extends React.Component {
  render() {
    return (
      <div style={styles.background}>
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
		border: "1px solid #CFCFCF",
        overflowY: "none",
        marginBottom: -25,
        height: "100%",
        boxShadow: "1px 4px 7px 1px rgba(0, 0, 0, 0.25)",
	},
  reminderSection: {
    borderRight: "1px solid #CFCFCF",
    height: "100%",
  },
  todoSection: {
    height: "100%",
  }
}
