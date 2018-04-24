import React from 'react';
import { Container, Image } from 'semantic-ui-react'

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
