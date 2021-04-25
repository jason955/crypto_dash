import React from 'react';
import Nav from './nav'
import News from './news'
import Table from './table-content'
import Footer from './footer'
import './landing.css'
/*************************
* Landing page for user
*************************/
class Landing extends React.Component{
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }


  render(props) {
    return (
      <div>
        <Nav />
        <section className="content">
          <News />
          <Table />
        </section>
        <Footer />
      </div>
    )
  }
}
export default Landing
