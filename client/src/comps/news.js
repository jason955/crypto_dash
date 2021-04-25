import React from 'react';
import axios from 'axios';
import yoda from './yoda.png';
import calendar from './calendar.png'
/*************************
* Table content
*************************/
class News extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render(props) {
    return (
      <section className="news">
        <section className="alerts">
          <section className="contentB">
            <div className="interact">
                <img src={yoda} alt="yoda" />
            </div>
            <section className="text">
              <div className="title">Smell Magic in the air. or maybe barbecue</div>
              <div className="summary">With what mingled joy and sorrow do I take up the pen to w...</div>
              <div className="date"><img src={calendar} className="calendar" alt="calendar" />Sept 18, 2017</div>
            </section>
          </section>
          <section className="contentB">
            <div className="interact">
                <img src={yoda} alt="yoda" />
            </div>
            <section className="text">
              <div className="title">Smell Magic in the air. or maybe barbecue</div>
              <div className="summary">With what mingled joy and sorrow do I take up the pen to w...</div>
              <div className="date"><img src={calendar} className="calendar" alt="calendar" />Sept 18, 2017</div>
            </section>
          </section>
          <section className="contentB">
            <div className="interact">
                <img src={yoda} alt="yoda" />
            </div>
            <section className="text">
              <div className="title">Smell Magic in the air. or maybe barbecue</div>
              <div className="summary">With what mingled joy and sorrow do I take up the pen to w...</div>
              <div className="date"><img src={calendar} className="calendar" alt="calendar" />Sept 18, 2017</div>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default News
