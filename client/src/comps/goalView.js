import React from 'react';
import Nav from './nav'
import News from './news'
import Table from './table-content'
import Footer from './footer'
import MyMonthlyCalendar from './calendar'
import axios from 'axios';

import './goalView.css'



/*************************
* Landing page for user
*************************/
class GoalView extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      events:[]
    }

  }
  /*************************
  * Table for Events
  *************************/
  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents() {
    let config = {
      method: "get",
      url: 'http://localhost:4000/api/events',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
    .then(response => {
      console.log(response.data)
      this.setState({events:response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render(props) {
    console.log(this.state.events)
    return (
      <div>
        <Nav />
        <section className="contentC">
          <section className="goal2">
            Drink 2 cups of coffee per day - calendar
          </section>
          <section>
            <MyMonthlyCalendar events={this.state.events} />
          </section>
        </section>
        <Footer />
      </div>
    )
  }
}
export default GoalView
