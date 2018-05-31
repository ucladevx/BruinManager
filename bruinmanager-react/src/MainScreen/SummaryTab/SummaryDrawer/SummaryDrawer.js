import React from 'react';
import WeatherBox from '../../../Components/WeatherBox/WeatherBox.js';
import DrawerSummary from '../../../Components/DrawerSummary/DrawerSummary.js';
//import './SummaryDrawer.scss'
export default class SummaryDrawer extends React.Component {
    render() {
        return(
            <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-betw"}}>
                <WeatherBox weekNum="10"/>
                <DrawerSummary />
            </div>
        );
    }
}