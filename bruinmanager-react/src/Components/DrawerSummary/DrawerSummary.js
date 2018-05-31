import React from 'react';
import {List, ListItem} from 'material-ui/List';
import moment from 'moment';
import './DrawerSummary.scss';
export default class DrawerSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "eventsToday": [],
        }
    }
    componentDidMount() {
        const weekday2num = {"S":0, "M":1, "T":2, "W":3, "R":4, "F":5, "s":6}
        var b = localStorage.getItem("myBMData");
        var c = JSON.parse(b);
        //var url = 'https://arcane-cove-10079.herokuapp.com/api/classes/' + c.id;
        // GET request this url to get user's classes
        if(c)
          var url = 'https://arcane-cove-10079.herokuapp.com/api/classes/' + c.id;

        else
          var url = 'https://arcane-cove-10079.herokuapp.com/api/classes/1941429952552173';//c.id;
        // var url = 'https://arcane-cove-10079.herokuapp.com/api/classes/1941429952552173';//c.id;
        let ans = []
        fetch(url)
        .then(results => {
            return results.json()
        }).then(data => {
            console.log(data[0].classes);
            data[0].classes.map((course) => {
                if("discussion" in course && "days" in course.discussion)
                {
                    course.discussion.days.split("").forEach(d => {
                        console.log(weekday2num[d])
                        console.log(weekday2num[d] + " " + d + " " + moment().day())
                        if(weekday2num[d] === moment().weekday())
                            ans.push({
                                name: course.lecture.name,
                                time: course.discussion.time,
                            });
                    })
                }
                if("lecture" in course && "days" in course.lecture)
                {
                    course.lecture.days.split("").forEach(d => {
                        console.log(weekday2num[d])
                        console.log(weekday2num[d] + " " + d + " " + moment().day())
                        if(weekday2num[d] === moment().weekday())
                            ans.push({
                                name: course.lecture.name,
                                time: course.lecture.time,
                            });
                    })
                }
            });
            console.log(ans);
            //ans.sort((a,b) => b-a);
            this.setState({
                eventsToday: ans,
            });
        });
    }

    render() {
        return (
            <List>
                {this.state.eventsToday.map(ele => {return <ListItem primaryText={ele.name.split("-")[0]} secondaryText={ele.time}/>})}
            </List>
        );
    }
}
