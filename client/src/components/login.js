import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import './login.css'; // Tell webpack that Button.js uses these styles

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
    console.log(usern)
    console.log(pass)
    let config = {
      method: "get",
      url: 'http://localhost:4000/api/accounts',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
    .then(response => {
      let data = {username: "DrJ", password: "a"};
      let final_data = [];
      let ret_data = data;
      if (data.username === usern && data.password === pass) {
        console.log("woop")
        this.props.history.push("/tabs");
      }

    })
    .catch(error => {
      this.setState({...this.state, isFetching: false});
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
export default Login;
