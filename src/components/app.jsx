import React from 'react';
import CalendarSquare from './calendarSquare';
import {rateParser, generateHex} from '../scripts/rateCalendar';

export default class App extends React.Component {
    constructor() {
        super();
        var jsonData = JSON.stringify([
            {"date": "2018-01-01", "rate": "199.99"},
            {"date": "2018-01-02", "rate": "199.99"},
            {"date": "2018-01-03", "rate": "199.99"},
            {"date": "2018-01-04", "rate": "199.99"},
            {"date": "2018-01-05", "rate": "199.99"},
            {"date": "2018-01-06", "rate": "115.49"},
            {"date": "2018-01-07", "rate": "115.49"},
            {"date": "2018-01-08", "rate": "115.49"},
            {"date": "2018-01-09", "rate": "115.49"},
            {"date": "2018-01-10", "rate": "115.49"},
            {"date": "2018-01-11", "rate": "200.00"},
            {"date": "2018-01-15", "rate": "115.49"},
            {"date": "2018-01-16", "rate": "115.49"},
            {"date": "2018-01-17", "rate": "115.49"},
            {"date": "2018-01-20", "rate": "115.49"},
            {"date": "2018-01-21", "rate": "115.49"},
            {"date": "2018-01-22", "rate": "200.00"}
        ]);
        this.state = {
            ratePeriods: rateParser(jsonData)
        };
    }

    addRate = (start, end, rate) => {

    }

    render = () => {
        var data = JSON.parse(this.state.ratePeriods);
        var squaresList = data.map(function(name, index){
            return <CalendarSquare key={ index } rateInfo={ name }/>;
        })

        return (
          <div className="app">
            <div className="title-header">Rate Schedule</div>
                <form className='rate-input-form' onSubmit={this.addRate}>

                  <input type="text"
                    className="form-textbox"
                    value={this.state.start}
                    onChange={this.onChange}
                    placeholder="Start Date"
                    id="start"/>
                  <br/>

                  <br/>
                  <input type="text"
                    className="form-textbox"
                    value={this.state.end}
                    onChange={this.onChange}
                    placeholder="End Date"
                    id="end"/>
                  <br/>

                  <br/>
                  <input type="text"
                    className="form-textbox"
                    value={this.state.rate}
                    onChange={this.onChange}
                    placeholder="Rate"
                    id="rate"/>
                  <br/>

                  <input className="submit-rate"
                         type="submit"
                         value="Submit New Rate Period!"/>

                </form>
            <div className="calendar-outer">
                <div className="calendar-box">
                    { squaresList }
                </div>
            </div>
          </div>
        );
    }
}
