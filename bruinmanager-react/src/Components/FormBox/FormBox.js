import React, { Component } from 'react';
import FormBoxStyle from './FormBox.css';
export default class FormBox extends React.Component {
    render(props) {
        return (
            <div style={styles.formBoxWrapper}>
                <div style={styles.formBox}>
                    <form style={{...FormBoxStyle}, {...styles.formTitle}}>
                        <input type={this.props.inputType} placeholder={this.props.title} style={styles.formTextBox}/>
                    </form>
                </div>
            </div>
        );
    }
}
/*
onClick={() => {this.myInp.focus()}}
ref={(ip) => this.myInp = ip
*/
const styles = {
        formBoxWrapper: {
            display: "flex",
            width: "100%",
            height: 50,
            flexDirection: "column",
        },
        formBox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        formTitle: {
            width: "auto",
            borderBottom: "2px solid #454545",
        },
        formText: {
            color: "grey",
        },
        formTextBox: {
            border: "none",
            height: 20,
            outline: "none",
            width: 220,
            textSize: 14,
            textAlign: "center",
        },
}
