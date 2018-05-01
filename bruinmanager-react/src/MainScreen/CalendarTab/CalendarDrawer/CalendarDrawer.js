import React from 'react';
import CalendarPicker from 'material-ui/DatePicker/Calendar';
import WeatherBox from '../../../Components/WeatherBox/WeatherBox.js';
import Checkbox from 'material-ui/Checkbox';
import './CalendarDrawer.scss'
export default class CalendarDrawer extends React.Component {
    render() {
        return(
            <div className="calendar-drawer-wrapper">
                <CalendarPicker 
                    autoOk={false}
                    cancelLabel={false}
                    firstDayOfWeek={1}
                    mode={'portrait'}
                    open={true}
                />
                <hr />
                <div>
                    <Checkbox
                        label="Classes and Exams"
                    />
                    <Checkbox
                        label="Reminders"
                    />
                    <Checkbox
                        label="Facebook Events"
                    />
                    <Checkbox
                        label="Popular"
                    />
                </div>
            </div>
        );
    }
}