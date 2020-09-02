import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

/*************************
* Table for displaying and interacting with
* backend tables
* can add, delete, and edit
*************************/
class BackendTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      columns: this.props.columns,
      data: this.props.data,
    }
  }

  /*************************
  * Update when the data updates
  * TODO: Change/Test to see when this is called
  *************************/
  componentDidUpdate(prevProps) { //watch for updates
    if (prevProps.data.length != this.props.data.length) {
      this.setState({data:this.props.data})
    }
  }

  /*************************
  * Update the database with an axios call
  * @param data - the data passed for add/edit/delete
  * @param flag - will be the method used for the axios call
  *               if post dont add /:id
  *************************/
  updateDB(data, flag) {
    this.props.updateDB(data, flag);
  }

  render(props) {
    return (
      <MaterialTable
        title={this.props.name}
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
                this.updateDB(newData, "post")
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                  this.updateDB(newData, "put")
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
                this.updateDB(oldData, "delete")
              }, 600);
            }),
        }}
      />
    );
  }
}
export default BackendTable;
