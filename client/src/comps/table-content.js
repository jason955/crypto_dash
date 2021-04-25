import React from 'react';
import axios from 'axios';

/*************************
* Table content
*************************/
class TableContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data:{}
    }
    let url = window.location.href;
    this.id = url.split('/')[4];
    this.table = {
      header: ["Account", "Dollars", "%Change"],
      accounts: [
        {account: "Vanguard", total: 5000, change:"-2.7"},
        {account: "Crypto", total: 3000, change:"1.7"},
        {account: "Acorns", total: 800, change:"-2.2"},
        {account: "Savings", total: 5000, change:"5.7"}
      ]
    }
  }

  componentDidMount() {
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
    const header = this.table.header.map((title) => <th>{title}</th>);
    const content = this.table.accounts.map((obj) =>
      <tr>
        <td>obj.account</td>
        <td>obj.total</td>
        <td>obj.change</td>
      </tr>
    );

    return (
      <section className="view">
        <table>
          <tr>
            {header}
          </tr>
            {content}
        </table>
      </section>
    )
  }
}
export default TableContent
