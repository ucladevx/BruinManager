import React from 'react';
import WeatherBox from '../../../Components/WeatherBox/WeatherBox.js';
//import './SummaryDrawer.scss'
export default class SummaryDrawer extends React.Component {
    render() {
        return(
            <WeatherBox weekNum="5"/>
        );
    }
}