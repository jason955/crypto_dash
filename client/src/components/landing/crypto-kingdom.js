import React from 'react';
import ReactTable from "react-table";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import BackendTable from '../basic/backend-table';
import axios from 'axios';
import bg from '../money.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

/*************************
* Table for Accounts
*************************/
class TrackersGraphs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  /*************************
  * Table for Accounts
  *************************/
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {

  }

  render(props) {
    return (
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default TrackersGraphs;