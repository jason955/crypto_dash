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
        { title: 'User Name', field: 'name' },

      ],
      data: [
        { name: 'Jason'},
        { name: 'Carlye'},
      ],
    }
  }

  render(props) {
    return (
      <BackendTable
       name={"Users"}
       columns = {this.state.columns}
       data = {this.state.data}
       />
    );
  }
}
 export default AccountsEdit;
