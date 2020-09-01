import React from 'react';
import ReactTable from "react-table";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import BackendTable from '../basic/backend-table';
import axios from 'axios';

/*************************
* Table for Trackers
*************************/
class TrackersEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Tracker Name', field: 'name' },
        { title: 'Goal', field: 'goal' },
      ],
      data: [],
    }
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({...this.state, isFetching: true});

    let config = {
      method: "get",
      url: 'http://localhost:4000/api/trackers',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
    .then(response => {
      let final_data = [];
      let ret_data = response.data.data;
      let list_data = ret_data.map((data, index) =>
        final_data[index] = {name:data.name, goal:data.goal}
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

  render(props) {
    return (
      <BackendTable
       name={"Trackers"}
       columns = {this.state.columns}
       data = {this.state.data}
       />
    );
  }
}

export default TrackersEdit;
