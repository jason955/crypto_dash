import React from 'react';
import Nav from './nav'
import News from './news'
import Table from './table-content'
import Footer from './footer'
import MyMonthlyCalendar from './calendar'
import axios from 'axios';
import Modal from './modal';
import AddEventBody from './addEventBody'
import './goalView.css'
import {RotateRight} from './transformations.js'


/*************************
* Landing page for user
*************************/
class GoalView extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      events:[],
      modal: false,
      date:'',
      trackers:[]
    }

  }
  /*************************
  * Table for Events
  *************************/
  componentDidMount() {
    this.fetchEvents();
    this.fetchTrackers();
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

  fetchTrackers() {
    let config = {
      method: "get",
      url: 'http://localhost:4000/api/trackers',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios(config)
      .then(response => {
        this.setState({trackers:response.data.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  addEvent(data) {

    let body =  {
            title: data.title,
            date: data.date,
            amount: data.amount
     };
    let config = {
      method: "post",
      url: 'http://localhost:4000/api/event',
      data:body,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios(config)
      .then(response => {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  openModal(date){
    this.setState({
      modal:!this.state.modal,
      date:date
    })
  }

  render(props) {
    return (
      <div>
        <RotateRight>
          <span style={{backgroundColor:"black"}}>
            <button>&times;</button>
          </span>
        </RotateRight>
        <Modal
          open={this.state.modal}
          close={() => this.openModal()}
          modalBody={(<AddEventBody date={this.state.date} trackers={this.state.trackers} submitEvent={(data) => this.addEvent(data)}/>)}
        />
        <Nav />
        <section className="contentC">
          <section className="goal2">
            Drink 2 cups of coffee per day - calendar
          </section>
          <section>
            <MyMonthlyCalendar
              events={this.state.events}
              click={(data) => this.openModal(data)}
            />
          </section>
        </section>
        <Footer />
      </div>
    )
  }
}
export default GoalView
