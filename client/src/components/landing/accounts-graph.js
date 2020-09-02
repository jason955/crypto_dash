import React from 'react';
import axios from 'axios';
import Card from '../cards/linegraph-card'

/*************************
* Table for Accounts
*************************/
class AccountsGraphs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accounts:[]
    }
  }

  /*************************
  * Table for Accounts
  *************************/
  componentDidMount() {
    this.fetchAccounts();
  }

  fetchAccounts() {
    let config = {
      method: "get",
      url: 'http://localhost:4000/api/accounts',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
    .then(response => {
      this.setState({accounts:response.data.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Card data={this.state.accounts}/>
      </div>
      );
  }
}

export default AccountsGraphs;
