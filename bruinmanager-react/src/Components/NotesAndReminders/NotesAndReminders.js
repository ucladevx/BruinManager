import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {List, ListItem} from 'material-ui/List';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Grid, Segment} from  'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import NotesSection from './NotesSection';
import ReminderSection from './ReminderSection';
import './notesReminders.scss';

export default class NotesAndReminders extends React.Component {
  render() {
    return (
      <div className='notes-and-reminders-section' style={styles.background}>
          <Paper zDepth={1} style={{width: "95%", height: "100%"}} children={
              <div>
                  <div className="notes-and-reminders-section">
                      <Tabs style={{width: "100%"}}>
                          <Tab label="Notes">
                            <Grid style={{width: "100%", paddingLeft: 15}}>
                               <Grid.Row>
                                   <Grid.Column mobile={6} tablet={6} computer={6} largeScreen={6} >
                                      <div className="scrollable-note-preview">
                                         <List>
                                             <ListItem
                                               primaryText="Note Title"
                                               secondaryText="Note message here. Feel free to read more by clicking on me"
                                               secondaryTextLines={2}
                                             />
                                             <ListItem
                                               primaryText="Note Title"
                                               secondaryText="Note message here. Feel free to read more by clicking on me"
                                               secondaryTextLines={2}
                                             />
                                             <ListItem
                                               primaryText="Note Title"
                                               secondaryText="Note message here. Feel free to read more by clicking on me"
                                               secondaryTextLines={2}
                                             />
                                             <ListItem
                                               primaryText="Note Title"
                                               secondaryText="Note message here. Feel free to read more by clicking on me"
                                               secondaryTextLines={2}
                                             />
                                             <ListItem
                                               primaryText="Note Title"
                                               secondaryText="Note message here. Feel free to read more by clicking on me"
                                               secondaryTextLines={2}
                                             />
                                         </List>
                                      </div>
                                   </Grid.Column>
                                   <Grid.Column mobile={10} tablet={10} computer={10} largeScreen={10} >
                                     <div>
                                        <textarea type="text" name="note-content" className="note-content-section"></textarea>
                                     </div>
                                   </Grid.Column>
                               </Grid.Row>
                             </Grid>
                          </Tab>
                      </Tabs>
                  </div>
                  <div>
                      <Grid style={{width: "100%", paddingLeft: 15}}>
                          <Grid.Row style={{marginLeft: 10}}>
                              <Grid.Column mobile={6} tablet={6} computer={6} largeScreen={6}>
                                  <RaisedButton label="Create New Note" primary={true} />
                              </Grid.Column>
                              <Grid.Column mobile={4} tablet={4} computer={4} largeScreen={4}>
                              </Grid.Column>
                              <Grid.Column mobile={3} tablet={3} computer={3} largeScreen={3}>
                                  <RaisedButton label="Cancel" backgroundColor="red" />
                              </Grid.Column>
                              <Grid.Column mobile={3} tablet={3} computer={3} largeScreen={3}>
                                  <RaisedButton label="Save" backgroundColor="cornflowerblue" />
                              </Grid.Column>
                          </Grid.Row>
                      </Grid>
                  </div>
              </div>
          } />
      </div>
    )
  }
}

/*
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
*/

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
