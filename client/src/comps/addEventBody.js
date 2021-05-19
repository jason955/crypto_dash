import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

/* The Modal (background) */
const modal = {
  display: 'block', /* Hidden by default */
  position: 'fixed', /* Stay in place */
  zIndex: '1', /* Sit on top */
  left: '0',
  top: '0',
  width: '100%', /* Full width */
  height: '100%', /* Full height */
  overflow: 'auto', /* Enable scroll if needed */
  backgroundColor: 'rgb(0,0,0)', /* Fallback color */
  backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
};
const modalOff = {
  display: 'none', /* Hidden by default */
  position: 'fixed', /* Stay in place */
  zIndex: '1', /* Sit on top */
  left: '0',
  top: '0',
  width: '100%', /* Full width */
  height: '100%', /* Full height */
  overflow: 'auto', /* Enable scroll if needed */
  backgroundColor: 'rgb(0,0,0)', /* Fallback color */
  backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
};
/* Modal Content/Box */
const modalContent = {
  backgroundColor: '#fefefe',
  margin: '15% auto', /* 15% from the top and centered */
  padding: '20px',
  border: '1px solid #888',
  width: '80%', /* Could be more or less, depending on screen size */
  color: 'black',
};

const close = {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
};
const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
const amount = (
  <div>
    <p>Please select your amount:</p>
    <input type="radio" name="amount" value="small" />
    <label for="small">small</label>
    <input type="radio" id="medium" name="amount" value="medium" />
    <label for="medium">medium</label>
    <input type="radio" id="large" name="amount" value="large" />
    <label for="large">large</label>
  </div>
);
const datetime = (
  <input type="datetime-local" id="datetime" name="datetime" />
)
/*************************
* Landing page for user
*************************/
class AddEventBody extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date:this.props.date,
      amount: 0,
      extraInputs: [],
    };
    this.defaultOption = "";

  }


  handleClick() {
  }
  handleChange(e) {
    const key = e.target.name;
    this.setState({[key]: e.target.value});
  }

  handleSubmit(e) {
    //e.preventDefault(); uncomment to reload page on submit
     let data = {
       title:this.state.title,
       date:this.props.date,
       amount:this.state.amount

     }
     this.props.submitEvent(data)
  }
  onDropdownChange(e) {
    let val = e.value;
    console.log(val)
    console.log(this.props.trackers)
    let tracks = this.props.trackers;
    let html = tracks.map((obj) =>
      {
        if (obj.name === val) {
          return this.generateExtraInputs(obj.extras)
        }
      }
    )
    this.setState({extraInputs:html})
  }
  generateExtraInputs(extra) {
    var html = extra === undefined ? [] : extra.map((val) =>
        {
           if (val === "amount") {
             return amount
           }
           else if (val === "time") {
             return datetime
           }
        }
      );
    return html;
  }
  render(props) {
    //let options = this.props.options.map((i) => i.name)
    let html = []
    let trackers = this.props.trackers;
    let options = trackers.map((obj) => obj.name)
    let extras = trackers.map((obj) => obj.extras)
    let defaultOption = options[0]
    console.log(trackers)
    html = this.state.extraInputs.length === 0 ? this.generateExtraInputs(extras[0]) : this.state.extraInputs;


    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <Dropdown options={options} onChange={(e) => this.onDropdownChange(e)} value={defaultOption} placeholder="Select an option" />

          {html}
          <input type="submit" value="Submit" />
        </form>
        <button onClick={(e) => this.handleClick(e)} />
      </div>
    )
  }
}
export default AddEventBody
