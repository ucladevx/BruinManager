import React, { Component } from 'react';
import './FormBox.scss';
export default class FormBox extends React.Component {
    render(props) {
        return (
            <div className="formBox-style-wrapper">
                <div className="form-box">
                    <form className="form-title">
                        <input type={this.props.inputType} placeholder={this.props.title} className="form-text-box"/>
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

