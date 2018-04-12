import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import { Container, Divider, Image } from 'semantic-ui-react'
import TabButton from '../TabButton/TabButton.js';


export default class Footer extends React.Component {

    render() {
        return(
    <Container textAlign='center' style={{paddingBottom:'10px'}}>
        <Image centered size='mini' src='/octobear.png'/>
        <header>BruinHub 2018</header>
      </Container>


        );
    }
}
