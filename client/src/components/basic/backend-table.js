import React from 'react';
import MaterialTable from 'material-table';

class BackendTable extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      columns: this.props.columns,
      data: this.props.data,
    }
  }
  componentDidUpdate(prevProps) { //watch for updates
    console.log(prevProps)
    console.log(this.props)
    if (prevProps.data.length != this.props.data.length) {
      this.setState({data:this.props.data})
    }
  }
  render(props) {
    console.log(this.props)
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
                  const data = [...this.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
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
              }, 600);
            }),
        }}
      />
    );
  }
}
export default BackendTable;
