import React from 'react';
import axios from 'axios';
import '../style/login.css'; // Tell webpack that Button.js uses these styles
import { connect } from 'react-redux'

/*************************
* Landing page for user
*************************/
class Login extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*************************
  * on form submit check w/ db for user data
  *************************/
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    let usern = form[0].value;
    let pass = form[1].value;
    let config = {
      method: "get",
      url: 'http://localhost:4000/api/user/' + usern + '/' + pass,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
    .then(response => {
      let data = response.data.data
      let final_data = [];
      if (data.username === usern && data.password === pass) {
        this.props.history.push("/landing/" + data._id);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  render(props) {
    return (
      <div className="login">
          <h1>Track Meh</h1>
          <form onSubmit={this.handleSubmit} method="post">
              <input type="text" name="u" placeholder="Username" required="required" />
              <input type="password" name="p" placeholder="Password" required="required" />
              <button type="submit" className="btn btn-primary btn-block btn-large">Ley Go</button>
          </form>
      </div>

    )
  }
}
export default connect()(Login)
