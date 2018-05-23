import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './IntermediatePage.scss';
export default class FormBox extends React.Component {
    render(props) {
        return (
            <div className="IntermediatePage-style-wrapper">
                <Link to="/dashboard"><button>Go to Dashboard!</button> </Link>
            </div>
        );
    }
}