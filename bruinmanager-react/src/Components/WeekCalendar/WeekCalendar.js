import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import * as Utils from './Utils';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import ScaleColumn from './ScaleColumn';

import HeaderCell from './HeaderCell';
import DayCell from './DayCell';
import Event from './Event';
import Modal from './Modal';
import './style.scss'

const propTypes = {
  firstDay: PropTypes.object, // the first day in the caledar
  numberOfDays: PropTypes.number,
  scaleHeaderTitle: PropTypes.string,
  headerCellComponent: PropTypes.func,
  dayFormat: PropTypes.string, // header day format

  startTime: PropTypes.object, // the start time of the scale and calendar
  endTime: PropTypes.object, // the end time of the scale and calendar
  scaleUnit: PropTypes.number,
  scaleFormat: PropTypes.string,
  cellHeight: PropTypes.number,
  dayCellComponent: PropTypes.func,

  selectedIntervals: PropTypes.array,
  onIntervalSelect: PropTypes.func,
  onIntervalUpdate: PropTypes.func,
  onIntervalRemove: PropTypes.func,

  eventComponent: PropTypes.func,
  onEventClick: PropTypes.func,

  modalComponent: PropTypes.func,
  useModal: PropTypes.bool,
};

let defaultProps = {
  firstDay: moment(),
  numberOfDays: 7,
  scaleHeaderTitle: '',
  headerCellComponent: HeaderCell,
  dayFormat: "ddd M/DD",
  startTime: moment({ h: 0, m: 0 }),
  endTime: moment({ h: 23, m: 59 }),
  scaleUnit: 15,
  scaleFormat: 'h:mm A',
  cellHeight: 15,
  dayCellComponent: DayCell,
  selectedIntervals: [],
  eventComponent: Event,
  modalComponent: Modal,
  useModal: true,
};

class WeekCalendar extends React.Component {
  constructor(props) {
    super(props);
    const { scaleUnit, startTime, endTime } = props;
    const scaleIntervals = Utils.getIntervalsByDuration(scaleUnit, startTime, endTime);
    const weekName = new Map([["Mo", "M"], ["Tu", "T"], ["We", "W"], ["Th", "R"], ["Fr", "F"], ["Sa", "S"], ["Su", "U"]]);
    let momentsArray = [];
    for(var i = 0; i < 7; i++) {
        let curDay = moment().clone().startOf("week").add(i, 'days');
        let dayName = curDay.format('dd');
        momentsArray.push([weekName.get(dayName), curDay]);
    }
    moment().add(1, 'days');
    this.state = {
      scaleIntervals,
      columnDimensions: [],
      scrollPosition: {
        top: 0,
        left: 0,
      },
      startSelectionPosition: null,
      preselectedInterval: null,
      isSmall: this.props.isSmall,
      classArray: [],
      momentsMap: new Map(momentsArray),
    };
  }

  componentDidMount() {
    this.calculateColumnDimension();
    window.addEventListener('resize', this.calculateColumnDimension);
    window.addEventListener('mouseup', this.handleSelectionStop);
    
    // get User id with fb info
    var b = localStorage.getItem("myBMData");
    //var c = JSON.parse(b);
    var c = b;
    console.log(c);
    
    // GET request this url to get user's classes
    var url = 'https://arcane-cove-10079.herokuapp.com/api/classes/1941429952552173';//c.id;
    // TODO: get request this url and put classes in the calendar
    //console.log(url);

    // end logic to get users data from api

    if(!this.state.isSmall)
        this.refs.calendarbody.refs[0].refs[moment().hours()].refs[moment().hours()].scrollIntoView();
    
    
    fetch(url)
    .then(results => {
        console.log(results)
        return results.json()
    }).then(data => {
      console.log(data)
        console.log(data[0].classes);
        this.setState({classArray: data[0].classes});
        this.state.classArray.map((course) => {
            if("discussion" in course && "days" in course.discussion && course.discussion.days.split("")[0] !== 'N')
              this.addTimeSlots(course.discussion, `[DIS] ${course.lecture.name}`);
            if("lecture" in course && "days" in course.lecture && course.lecture.days.split("")[0] !== 'N')
              this.addTimeSlots(course.lecture, `[LEC] ${course.lecture.name}`);
        });
    });
    
  }
  parseHour(time) {
      let res = parseInt(time.split(":")[0].substring(0, time.length - 2));
      if(time.substring(time.length-2,time.length) === "pm" && res !== 12)
        res += 12;
      //console.log("hour: " + res + time.substring(time.length-2,time.length));
      return parseInt(res);
  }
  parseMinute(time) {
      if(!time.includes(":")) {
        //console.log("minute: " + 0);
        return 0;
      }
      //console.log("minute: " + parseInt(time.split(":")[1].substring(0, 2)));
      return parseInt(time.split(":")[1].substring(0, 2));
  }
  addTimeSlots(timeSlot, name) {
      timeSlot.days.split("").map((day) => {
          let curDayStart = this.state.momentsMap.get(day); //.clone()
          if(typeof curDayStart === "undefined") return;
          curDayStart.hour(this.parseHour(timeSlot.time.split("-")[0]));
          curDayStart.minutes(this.parseMinute(timeSlot.time.split("-")[0]));
          let curDayEnd = this.state.momentsMap.get(day).clone();
          curDayEnd.hour(this.parseHour(timeSlot.time.split("-")[1]));
          curDayEnd.minutes(this.parseMinute(timeSlot.time.split("-")[1]));
          this.state.preselectedInterval = {start: curDayStart, end: curDayEnd};
          this.state.updateEvent = false;
          let tempValue = {
              value: name,
              location: timeSlot.location,
          }
          this.submitPreselectedInterval(tempValue);
      });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.scaleUnit !== this.props.scaleUnit || nextProps.startTime !== this.props.startTime || nextProps.endTime !== this.props.endTime) {
      const scaleIntervals = Utils.getIntervalsByDuration(nextProps.scaleUnit, nextProps.startTime, nextProps.endTime);
      this.setState({
        scaleIntervals,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateColumnDimension);
    window.removeEventListener('mouseup', this.handleSelectionStop);
  }

  calculateColumnDimension = () => {
    const {
      numberOfDays,
    } = this.props;
    const columnDimensions = [];
    for (let i = 0; i < numberOfDays; i += 1) {
      const left = (i === 0) ? 0 : (columnDimensions[i - 1].left + columnDimensions[i - 1].width);
      let columnWidth = 0;

      const columnElement = document.querySelectorAll(`[data-colpos='${i}']`)[0];
      if (columnElement) {
        columnWidth = columnElement.getBoundingClientRect().width;
      }
      columnDimensions.push({
        left,
        width: columnWidth,
      });
    }
    this.setState({ columnDimensions });
  }

  handleScroll = (e) => {
    this.setState({
      scrollPosition: {
        top: e.target.scrollTop,
        left: e.target.scrollLeft,
      },
    });
  }

  handleCellMouseEnter = (col, row) => {
    if (this.state.startSelectionPosition != null) {
      this.setState({
        mousePosition: {
          x: col,
          y: row,
        },
      });
    }
  }

  handleSelectionStart = (col, row) => {
      //console.log("handle selection start");
    const startSelectionPosition = {
      x: col,
      y: row,
    };
    this.setState({
      startSelectionPosition,
      mousePosition: startSelectionPosition,
    });
  }

  handleSelectionStop = (e) => {
      //console.log("handle selection end");
    if (e.button !== 0) {
      return;
    }

    const {
      firstDay,
      scaleUnit,
      useModal,
    } = this.props;
    const {
      startSelectionPosition,
      mousePosition,
      scaleIntervals,
    } = this.state;

    if (startSelectionPosition == null) {
      return;
    }

    const endCol = mousePosition.x;
    const endRow = mousePosition.y;

    const minDayIndex = Math.min(startSelectionPosition.x, endCol);
    const maxDayIndex = Math.max(startSelectionPosition.x, endCol);

    const startDay = moment(firstDay).add(minDayIndex, 'days');
    const endDay = moment(firstDay).add(maxDayIndex, 'days');

    const minCellIndex = Math.min(startSelectionPosition.y, endRow);
    const maxCellIndex = Math.max(startSelectionPosition.y, endRow) + 1;
    const offsetTop = Utils.getOffset(scaleIntervals[0].start);
    const startSelectionTime = Utils.getMoment(scaleUnit, minCellIndex, offsetTop);
    const endSelectionTime = Utils.getMoment(scaleUnit, maxCellIndex, offsetTop);

    const start = moment(startDay)
      .hour(startSelectionTime.hour())
      .minute(startSelectionTime.minute())
      .second(0);
    const end = moment(endDay)
      .hour(endSelectionTime.hour())
      .minute(endSelectionTime.minute())
      .second(0);

    if (useModal) {
      const preselectedInterval = {
        start,
        end,
      };
      this.setState({
        preselectedInterval,
        updateEvent: false,
      });
    } else {
      const result = Utils.getIntervals(start, end);
      if (this.props.onIntervalSelect) {
        this.props.onIntervalSelect(result);
      }
    }

    this.setState({
      startSelectionPosition: null,
      mousePosition: null,
    });
  }

  removePreselectedInterval = () => {
    const { preselectedInterval, updateEvent } = this.state;
    if (updateEvent && this.props.onIntervalRemove) {
      this.props.onIntervalRemove(preselectedInterval);
    }
    this.setState({ preselectedInterval: null });
  }

  submitPreselectedInterval = (newValue) => {
    const { preselectedInterval, updateEvent } = this.state;
    if (updateEvent) {
      if (this.props.onIntervalUpdate) {
        this.props.onIntervalUpdate({
          ...preselectedInterval,
          ...newValue,
        });
        }
      } else if (this.props.onIntervalSelect) {
      const intervals = Utils.getIntervals(preselectedInterval.start, preselectedInterval.end);
      const result = intervals.map(interval => ({
        ...interval,
        ...newValue,
      }));
      this.props.onIntervalSelect(result);
    }
    this.setState({ preselectedInterval: null });
}

  closeModule = () => {
    this.setState({
      preselectedInterval: null,
    });
  }

  handleEventClick = (oEvent) => {
    if (this.props.onEventClick) {
      this.props.onEventClick(oEvent);
    }
    this.setState({
      preselectedInterval: oEvent,
      updateEvent: true,
    });
  }

  renderSelectedIntervals() {
    const {
      firstDay,
      numberOfDays,
      cellHeight,
      scaleUnit,
      selectedIntervals,
    } = this.props;
    const {
      columnDimensions,
      scaleIntervals,
    } = this.state;
    const result = [];
    if (columnDimensions.length === 0 || selectedIntervals.length === 0) {
      return result;
    }
    const EventComponent = this.props.eventComponent;
    const offsetTop = Utils.getOffset(scaleIntervals[0].start);
    for (let dayIndex = 0; dayIndex < numberOfDays; dayIndex += 1) {
      const day = moment(firstDay).startOf('day').add(dayIndex, 'day');
      const intervals = selectedIntervals.filter(interval => interval.start.isSame(day, 'day') || interval.end.isSame(day, 'day'));
      if (intervals.length > 0) {
        intervals.sort((i1, i2) => i1.start.diff(i2.start, 'minutes'));

        intervals.forEach((interval, index, array) => {
          let startY = 0;
          if (!interval.start.isBefore(day)) {
            startY = Utils.getNumberOfCells(interval.start, scaleUnit, false, offsetTop);
          }

          if (startY > scaleIntervals.length) {
            return;
          }

          const beforeIntersectionNumber = array.filter((i, i1) => i1 < index && interval.start.isBefore(i.end)).length;
          const afterIntersectionNumber = array.filter((i, i1) => i1 > index && interval.end.isAfter(i.start)).length;
          const groupIntersection = (beforeIntersectionNumber + afterIntersectionNumber + 1);

          let endY = Utils.getNumberOfCells(interval.end, scaleUnit, true, offsetTop);
          if (endY > scaleIntervals.length) {
            endY = scaleIntervals.length;
          }
          const top = startY * cellHeight;
          const width = (columnDimensions[dayIndex].width - 15) / groupIntersection;
          const left = columnDimensions[dayIndex].left + ((width + 7) * beforeIntersectionNumber);
          const height = (endY - startY) * cellHeight;
          const eventWrapperStyle = {
            top,
            left,
            width,
            height,
          };
          const eventComponent = (
            <div
              className="weekCalendar__overlay"
              key={(dayIndex * 10) + index}
              style={eventWrapperStyle}
              onClick={this.handleEventClick.bind(this, interval)}
            >
              <EventComponent {...interval} />
            </div>
          );
          result.push(eventComponent);
        });
      }
    }
    return result;
  }

  renderOverlay() {
    if (this.state.startSelectionPosition != null) {
      const startPosition = this.state.startSelectionPosition;
      const { mousePosition } = this.state;

      const top = Math.min(startPosition.y, mousePosition.y) * this.props.cellHeight;
      const { left } = this.state.columnDimensions[Math.min(startPosition.x, mousePosition.x)];
      const lastSelectedColumn = this.state.columnDimensions[Math.max(startPosition.x, mousePosition.x)];
      const width = (lastSelectedColumn.left - left) + lastSelectedColumn.width;
      const height = ((Math.max(startPosition.y, mousePosition.y) + 1) * this.props.cellHeight) - top;
      const overlayStyle = {
        top,
        left,
        width,
        height,
      };
      return (
        <div
          className="weekCalendar__overlay weekCalendar__overlay_status_selection"
          style={overlayStyle}
        />
      );
    }
    return null;
  }

  renderModal() {
    const { useModal } = this.props;
    const { preselectedInterval } = this.state;
    if (useModal && preselectedInterval) {
      const ModalComponent = this.props.modalComponent;
      return (
        <div className="calendarModal">
          <div className="calendarModal__backdrop" onClick={this.closeModule} />
          <div className="calendarModal__content">
            <ModalComponent
              {...preselectedInterval}
              onRemove={this.removePreselectedInterval}
              onSave={this.submitPreselectedInterval}
            />
          </div>
        </div>
      );
    }

    return null;
  }

  render() {
    const {
      firstDay,
      numberOfDays,
      headerCellComponent,
      dayFormat,
      scaleUnit,
      scaleFormat,
      cellHeight,
      dayCellComponent,
      scaleHeaderTitle,
    } = this.props;

    const isSelection = this.state.startSelectionPosition != null;

    return (
      <div className={isSelection ? 'weekCalendar weekCalendar__status_selection' : 'weekCalendar'}>
        <div className="weekCalendar__scaleHeader color1 color2txt" >
          <span style={{fontWeight:'normal'}}>{scaleHeaderTitle}</span>
        </div>
        <div className="weekCalendar__header" style={{ left: -this.state.scrollPosition.left }}>
          <CalendarHeader
            firstDay={firstDay}
            numberOfDays={numberOfDays}
            dayFormat={dayFormat}
            columnDimensions={this.state.columnDimensions}
            headerCellComponent={headerCellComponent}
          />
        </div>
        <div className="weekCalendar__scaleColumn" style={{ top: -this.state.scrollPosition.top }}>
          <ScaleColumn
            scaleUnit={this.props.scaleUnit}
            scaleFormat={scaleFormat}
            scaleIntervals={this.state.scaleIntervals}
            cellHeight={this.props.cellHeight}
            ref="scaleCol"
          />
        </div>
        <div className="weekCalendar__content" onScroll={this.handleScroll} style={this.state.isSmall ? {minHeight: 300, maxHeight: 300, overflowX: "scroll", overflowY: "hidden",} :
                                                                                                        {minHeight: "100%", width: "auto", pointerEvents: "auto", overflowX: "hidden", overflowY: "scroll"}}>
          <CalendarBody
            ref = "calendarbody"
            firstDay={firstDay}
            numberOfDays={numberOfDays}
            scaleUnit={scaleUnit}
            scaleIntervals={this.state.scaleIntervals}
            cellHeight={cellHeight}
            dayCellComponent={dayCellComponent}
            onSelectionStart={this.handleSelectionStart}
            onCellMouseEnter={this.handleCellMouseEnter}
          />
          {this.renderSelectedIntervals()}
          {this.renderOverlay()}
        </div>
        {this.renderModal()}
      </div>
    );
  }
}
WeekCalendar.propTypes = propTypes;
WeekCalendar.defaultProps = defaultProps;
export default WeekCalendar;
