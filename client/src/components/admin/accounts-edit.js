import React from 'react';
import ReactTable from "react-table";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import AdminTable from './admin-table';
import axios from 'axios';

/*************************
* Table for Accounts
*************************/
class AccountsEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      columns: [
        { title: 'Account Name', field: 'name' },
        { title: 'Description', field: 'description' },
        { title: 'Total', field: 'total' },
        { title: 'Previous Total', field: 'previous_totals' },
      ],
      data: [],
    }
  }

  /*************************
  * Table for Accounts
  *************************/
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({...this.state, isFetching: true});

    let config = {
      method: "get",
      url: 'http://localhost:4000/api/accounts',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
    .then(response => {
      let final_data = [];
      let ret_data = response.data.data;
      let list_data = ret_data.map((data, index) =>
        final_data[index] = {_id: data._id, name:data.name, description:data.description, total:data.total, previous_totals:data.previous_totals}
      );
      this.setState({
          ...this.state,
          data: final_data,
          isFetching: false
      })
    })
    .catch(error => {
      this.setState({...this.state, isFetching: false});
      console.log(error);
    });
  }

  updateDB(data, flag) {
    let id = "/" + data._id;
    //let payload = JSON.stringify(data);
    let prevs = data.previous_totals;
    let final_prev = []
    console.log(prevs)
    if (prevs.length > 1) {
      prevs = prevs.split(",")
      prevs.map((p) =>
        final_prev.push(parseInt(p))
      );
    }
    else {final_prev = prevs}

    data.previous_totals = final_prev
    if (flag === "post") {
      id = "";
    }

    let config = {
      method: flag,
      url: 'http://localhost:4000/api/account' + id,
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(props) {
    return (
      <AdminTable
       name={"Accounts"}
       columns = {this.state.columns}
       data = {this.state.data}
       updateDB = {this.updateDB}
       />
    );
  }
}

export default AccountsEdit;
