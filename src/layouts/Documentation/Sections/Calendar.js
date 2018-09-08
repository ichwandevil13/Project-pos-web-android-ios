import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// react component used to create a calendar with events on it
import BigCalendar from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

import { events } from "../../../variables/general";

const codeExample = `import React from 'react';
// react component used to create a calendar with events on it
import BigCalendar from 'react-big-calendar';
// dependency plugin for react-big-calendar
import moment from 'moment';
// react component used to create alerts
import SweetAlert from 'react-bootstrap-sweetalert';

import { events } from 'variables/general';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      events: events,
      alert: null
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  selectedEvent(event){
    alert(event.title);
  }
  addNewEventAlert(slotInfo){
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{display: "block",marginTop: "-100px"}}
          title="Input something"
          onConfirm={(e) => this.addNewEvent(e,slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      )
    });
  }
  addNewEvent(e,slotInfo){
    var newEvents = this.state.events;
    newEvents.push({
      'title': e,
      'start':slotInfo.start,
      'end':slotInfo.end
    })
    this.setState({
      alert: null,
      events: newEvents
    })
  }
  hideAlert(){
    this.setState({
      alert: null
    });
  }
  eventColors(event, start, end, isSelected) {
    var backgroundColor = "event-";
    event.color ? (backgroundColor=backgroundColor+event.color):(backgroundColor=backgroundColor+"default");
    return {
      className: backgroundColor
    };
  }
  render(){
    return (
      <div>
        {this.state.alert}
        <BigCalendar
          selectable
          events={this.state.events}
          defaultView='month'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => this.selectedEvent(event)}
          onSelectSlot={(slotInfo) => this.addNewEventAlert(slotInfo)}
          eventPropGetter={this.eventColors}
        />
      </div>
    );
  }
}

export default Calendar;
`;

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      alert: null
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  selectedEvent(event) {
    alert(event.title);
  }
  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Input something"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      )
    });
  }
  addNewEvent(e, slotInfo) {
    var newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end
    });
    this.setState({
      alert: null,
      events: newEvents
    });
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  eventColors(event, start, end, isSelected) {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor
    };
  }
  render() {
    return (
      <div>
        <h1>Calendar v0.19.2</h1>
        <p>
          We have created the design of the React Big Calendar. We have changed
          the colors, typography and buttons, so it can look like the rest of
          the dashboard.
        </p>
        <p>
          For more information please checkout their{" "}
          <a
            href="https://github.com/intljusticemission/react-big-calendar"
            target="_blank"
            rel="noopener noreferrer"
          >
            full documentation
          </a>.
        </p>
        <h2>Styles</h2>
        <p>
          You will find the styles for this component in<br />{" "}
          <code>
            src/assets/scss/material-dashboard-pro-react/plugins/_plugin-react-big-calendar.scss
          </code>.
        </p>
        <p>Here is a coded example:</p>
        {this.state.alert}
        <BigCalendar
          selectable
          events={this.state.events}
          defaultView="month"
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => this.selectedEvent(event)}
          onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
          eventPropGetter={this.eventColors}
        />
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Calendar;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Calendar