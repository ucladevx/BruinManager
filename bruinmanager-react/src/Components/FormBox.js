import React, { Component } from 'react';

export default class FormBox extends React.Component {
    render(props) {
        return (
            <div style={styles.formBoxWrapper} onClick={() => {this.myInp.focus()}}>
                <div style={styles.formBox}>
                    <form style={styles.formTitle}>
                        <span style={styles.formText}>{this.props.title}</span><br/>
                        <input type={this.props.inputType} style={styles.formTextBox} ref={(ip) => this.myInp = ip}/>
                    </form>
                </div>
            </div>
        );
    }
}

let styles = {
        formBoxWrapper: {
            display: "flex",
            width: "100%",
            height: 60,
            flexDirection: "column",
            borderTop: "1px solid grey",
        },
        formBox: {
            marginLeft: 50,
        },
        formTitle: {
            width: "auto",
        },
        formText: {
            color: "grey",
        },
        formTextBox: {
            border: "none",
            height: 20,
            backgroundColor: "rgba(245, 245, 245, 1)",
            outline: "none",
            width: 220,
            textSize: 14,
        },
}
