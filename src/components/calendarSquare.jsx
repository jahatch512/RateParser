import React from 'react';


export default class CalendarSquare extends React.Component {
    constructor(props) {
        super(props);
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
          <div className="date-label">
              Start Date:
              <div className="date-number">{this.state.start}</div>
          </div>
          <div className="date-label">
              End Date:
              <div className="date-number">{this.state.end}</div>
          </div>
          <div id="rate" style={{color: this.state.color}}>{this.state.rate}<br />{this.state.color}</div>
      </div>
    );
  }
}
