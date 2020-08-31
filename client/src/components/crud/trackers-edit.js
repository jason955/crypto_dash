import React from 'react';
import ReactTable from "react-table";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import BackendTable from '../basic/backend-table';

class AccountsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Tracker Name', field: 'name' },
        { title: 'Goal', field: 'goal' },
      ],
      data: [
        { name: 'Coffee', goal: 'Drink 1-2 cups a day none after noon'},
        { name: 'Smoking', goal: 'Smoke 3 times a week'},
      ],
    }
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
 export default AccountsEdit;
