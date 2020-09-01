import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

/*************************
* Landing page for user
*************************/
class Landing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

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


  render(props) {
    return (<div> p </div>)
  }
}
export default Landing;
