import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import Tabs from './tabs-landing'
/*************************
* Landing page for user
*************************/
class Landing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render(props) {
    return (
      <div>
        <Tabs />
      </div>
    )
  }
}
export default Landing;
