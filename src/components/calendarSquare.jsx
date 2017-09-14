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
    // var style = {
    //     border-color:
    // }
    return (
      <div className="calendar-square">
          <div className="date-label">
              Start:  {this.state.start}
          </div>
          <div className="date-label">
              End:  {this.state.end}
          </div>
          <div className="date-label">
              Rate:  {this.state.rate}
          </div>
          <div id="rateColor" style={{background: this.state.color}}></div>
          <div className="hexValue">{this.state.color}</div>
      </div>
    );
  }
}
