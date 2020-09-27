import React from 'react';
import axios from 'axios';
import TabsLanding from '../landing/tabs-landing'
import { connect } from 'react-redux'
import { getUser } from '../../actions'

/*************************
* Landing page for user
*************************/
class Landing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:{}
    }
    let url = window.location.href;
    this.id = url.split('/')[4];
  }
  componentDidMount() {
    this.props.dispatch(getUser(this.id))
    let config = {
      method: "get",
      url: 'http://localhost:4000/api/getUserData/' + this.id,
      headers: {
        'Content-Type': 'application/json'
      }

    };

    axios(config)
    .then(response => {
      console.log(response.data)
      this.setState({data:response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }


  render(props) {
    return (
      <div>
        <TabsLanding data={this.state.data} />
      </div>

    )
  }
}
export default connect()(Landing)
