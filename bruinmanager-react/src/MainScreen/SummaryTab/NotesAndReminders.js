import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NotesSection from './NotesSection';
import ReminderSection from './ReminderSection';

export default class NotesAndReminders extends React.Component {
  render() {
    return (
      <div style={styles.background}>
        <Container>
          <Row>
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
		border: "1px solid black",
		marginTop: 25,
		height: "100%",
    overflowY: "scroll",
    marginBottom: -25,
    height: 400,
	},
  reminderSection: {
    borderRight: "1px solid black",
    paddingLeft: 20,
  },
  todoSection: {
    borderLeft: "1px solid black",
    paddingLeft: 20,
  }
}
