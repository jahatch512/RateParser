import React from 'react';


export default class CalendarSquare extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            start: props.rateInfo["period-start"],
            rate: props.rateInfo["rate"],
            color: props.rateInfo["color"],
            end: props.rateInfo["period-end"]
        };
    }

  render = () => {
    return (
      <div className="calendar-square">
          <div id="start">{this.state.start}</div>
          <div id="end">{this.state.end}</div>
          <div id="rate">{this.state.rate}</div>
      </div>
    );
  }
}
