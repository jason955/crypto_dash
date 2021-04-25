import { format, startOfMonth, subHours } from 'date-fns';
import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import {
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';
import { MonthlyBody2 } from './calendar_comps'
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';


class MyMonthlyCalendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentMonth: startOfMonth(new Date()),
      setCurrentMonth: startOfMonth(new Date())
    };
  }
  setCurrentMonth(date){
    this.setState({currentMonth:date})
  }

  render(props) {
    var d = new Date(2021, 4, 24, 10, 33, 30, 0);
    let evs = []
    let data = this.props.events.data
    if (data !== undefined && data.length !== 0) {
      data.map((item, index) =>
        evs[index] = {title:item.title, date:new Date(item.date)}
      )
    }

    return (
      <MonthlyCalendar
        currentMonth={this.state.currentMonth}
        onCurrentMonthChange={date => this.setCurrentMonth(date)}
      >
        <MonthlyNav />
        <MonthlyBody2
          events={evs}
          renderDay={data =>
            data.map((item, index) => (
              <DefaultMonthlyEventItem
                key={index}
                title={item.title}
                date={format(item.date, 'k:mm')}
              />
            ))
          }
        />
      </MonthlyCalendar>
    );
  }
}

export default MyMonthlyCalendar
