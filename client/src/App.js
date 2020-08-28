import React, { Component } from 'react';
import ReactTable from 'react-table';
import { getInitialCoinData } from './DataProvider';
import 'react-table/react-table.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialCoinData()
    };

    // this.columns = [{
    //   Header: 'Origin',
    //   accessor: 'origin'
    // }, {
    //   Header: 'Flight',
    //   accessor: 'flight'
    // }, {
    //   Header: 'Arrival',
    //   accessor: 'arrival'
    // }, {
    //   Header: 'State',
    //   accessor: 'state'
    // }];
    this.columns = [{
      Header: 'Coin',
      accessor: 'coin'
    }, {
      Header: 'Price',
      accessor: 'price'
    }, {
      Header: 'Data',
      accessor: 'data'
    }];

    this.eventSource = new EventSource('http://localhost:5000/events');
  }

  componentDidMount() {
    this.eventSource.addEventListener('flightStateUpdate', (e) => this.updateFlightState(JSON.parse(e.data)));
    this.eventSource.addEventListener('flightRemoval', (e) => this.removeFlight(JSON.parse(e.data)));
    this.eventSource.addEventListener('closedConnection', () => this.stopUpdates());
    this.eventSource.addEventListener('coinStateUpdate', (e) => this.updateCoinState(JSON.parse(e.data)));

  }

  updateFlightState(flightState) {
    console.log(flightState);
    let newData = this.state.data.map((item) => {
      if (item.flight === flightState.flight) {
        item.state = flightState.state;
      }
      return item;
    });

    this.setState(Object.assign({}, {data: newData}));
  }
  updateCoinState(coinState) {
    let newData = this.state.data.map((item) => {
      if (item.coin === coinState.coin) {
        console.log("JB")
        item.price = coinState.price;
      }
      
      return item;
    });

    this.setState(Object.assign({}, {data: newData}));
  }
  removeFlight(flightInfo) {
    const newData = this.state.data.filter((item) => item.flight !== flightInfo.flight);

    this.setState(Object.assign({}, {data: newData}));
  }

  stopUpdates() {
    this.eventSource.close();
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.stopUpdates()}>Stop updates</button>
        <ReactTable
          data={this.state.data}
          columns={this.columns}
        />
      </div>
    );
  }
}

export default App;
