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
    this.fetchTrackers();
  }

  fetchTrackers() {
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

  updateDB(data, flag) {
    let id = "/" + data._id;
    let payload = JSON.stringify(data);

    if (flag === "post") {
      id = "";
    }

    let config = {
      method: flag,
      url: 'http://localhost:4000/api/tracker' + id,
      headers: {
        'Content-Type': 'application/json'
      },
      data : payload
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
      <BackendTable
       name={"Trackers"}
       columns = {this.state.columns}
       data = {this.state.data}
       updateDB = {this.updateDB}
       />
    );
  }
}

export default TrackersEdit;
