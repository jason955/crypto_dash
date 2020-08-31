import React from 'react';
import ReactTable from "react-table";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import BackendTable from '../basic/backend-table';
import axios from 'axios';

// { name: 'Acorns', desc: 'Round up Mutual Fund', total: 600, prevTotal: 500 },
// { name: 'Vanguard', desc: 'Mutual Fund', total: 600, prevTotal: 500 },
// { name: 'Crypto', desc: 'Gambling', total: 600, prevTotal: 500 },
// { name: 'Savings', desc: 'Savings Bank Account', total: 600, prevTotal: 500 },
// { name: 'Loan - Wells', desc: 'Wells Loan', total: 600, prevTotal: 500 },
// { name: 'Loan - Nelnet', desc: 'Nelnet Loan', total: 600, prevTotal: 500 },
// { name: 'Loan - Car', desc: 'Car loan', total: 600, prevTotal: 500 },
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

  componentDidMount() {
    //this.fetchUsers();
    //this.timer = setInterval(() => this.fetchUsers(), 5000);
    let ex =[ { name: 'Acorns', description: 'bund up Mutual Fund', total: 600, previous_totals: 500 },
    { name: 'Vanguard', description: 'Mutual Fund', total: 600, previous_totals: 500 },
    { name: 'Crypto', description: 'Gambling', total: 600, previous_totals: 500 },
    { name: 'Savings', description: 'Savings Bank Account', total: 600, previous_totals: 500 },
    { name: 'Loan - Wells', description: 'Wells Loan', total: 600, previous_totals: 500 },
    { name: 'Loan - Nelnet', description: 'Nelnet Loan', total: 600, previous_totals: 500 },
    { name: 'Loan - Car', description: 'Car loan', total: 600, previous_totals: 500 },]

    this.setState({...this.state, data: ex, isFetching: false});
  }
  fetchUsers() {

    this.setState({...this.state, isFetching: true});
    axios.get('http://localhost:4000/api/accounts')
        .then( res => {
            let final_data = [];
            let ret_data = res.data.data;
            let list_data = ret_data.map((data, index) =>
              final_data[index] = {name:data.name, description:data.description, total:data.total, previous_totals:data.previous_totals}
            );
            let ex =[ { name: 'Acorns', description: 'bund up Mutual Fund', total: 600, previous_totals: 500 },
            { name: 'Vanguard', description: 'Mutual Fund', total: 600, previous_totals: 500 },
            { name: 'Crypto', description: 'Gambling', total: 600, previous_totals: 500 },
            { name: 'Savings', description: 'Savings Bank Account', total: 600, previous_totals: 500 },
            { name: 'Loan - Wells', description: 'Wells Loan', total: 600, previous_totals: 500 },
            { name: 'Loan - Nelnet', description: 'Nelnet Loan', total: 600, previous_totals: 500 },
            { name: 'Loan - Car', description: 'Car loan', total: 600, previous_totals: 500 },]
            // this.setState({
            //     data: ex
            // })
            console.log(this.state.data);
        })
        .catch( err => console.log(err));
        let ex =[ { name: 'Acorns', description: 'bund up Mutual Fund', total: 600, previous_totals: 500 },
        { name: 'Vanguard', description: 'Mutual Fund', total: 600, previous_totals: 500 },
        { name: 'Crypto', description: 'Gambling', total: 600, previous_totals: 500 },
        { name: 'Savings', description: 'Savings Bank Account', total: 600, previous_totals: 500 },
        { name: 'Loan - Wells', description: 'Wells Loan', total: 600, previous_totals: 500 },
        { name: 'Loan - Nelnet', description: 'Nelnet Loan', total: 600, previous_totals: 500 },
        { name: 'Loan - Car', description: 'Car loan', total: 600, previous_totals: 500 },]

        this.setState({...this.state, data: ex, isFetching: false});

  }
  //may need this for later. see backend-table for hints
  componentDidUpdate() {
    // axios.get('http://localhost:4000/api/accounts')
    //     .then( res => {
    //         let final_data = [];
    //         let ret_data = res.data.data;
    //         let list_data = ret_data.map((data, index) =>
    //           final_data[index] = {name:data.name, description:data.description, total:data.total, previous_totals:data.previous_totals}
    //         );
    //         let ex =[ { name: 'Acorns', desc: 'Round up Mutual Fund', total: 600, prevTotal: 500 },
    //         { name: 'Vanguard', desc: 'Mutual Fund', total: 600, prevTotal: 500 },
    //         { name: 'Crypto', desc: 'Gambling', total: 600, prevTotal: 500 },
    //         { name: 'Savings', desc: 'Savings Bank Account', total: 600, prevTotal: 500 },
    //         { name: 'Loan - Wells', desc: 'Wells Loan', total: 600, prevTotal: 500 },
    //         { name: 'Loan - Nelnet', desc: 'Nelnet Loan', total: 600, prevTotal: 500 },
    //         { name: 'Loan - Car', desc: 'Car loan', total: 600, prevTotal: 500 },]
    //         this.setState({
    //             data: ex
    //         })
    //         console.log(this.state.data);
    //     })
    //     .catch( err => console.log(err));
  }



  render(props) {
    console.log(this.state.data)
    return (
      <BackendTable
       name={"Accounts"}
       columns = {this.state.columns}
       data = {this.state.data}
       />
    );
  }
}
 export default AccountsEdit;
