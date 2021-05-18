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
/*************************
* Landing page for user
*************************/
class AddEventBody extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date:this.props.date,
      amount: 0
    };

  }

  handleClick() {
  }
  handleChange(e) {
    const key = e.target.name;
    this.setState({[key]: e.target.value});
  }

  handleSubmit(e) {
    //e.preventDefault();
     let data = {
       title:this.state.title,
       date:this.props.date,
       amount:this.state.amount

     }
     this.props.submitEvent(data)
  }

  render(props) {
    let options = this.props.options.map((i) => i.name)
    console.log(options)
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>

            <Dropdown options={options} onChange={this._onSelect} value={options[0]} placeholder="Select an option" />;
            <input name="amount" type="number" value={this.state.amount} onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
        <button
          onClick={(e) => this.handleClick(e)}
          >
              jason
        </button>
      </div>
    )
  }
}
export default AddEventBody
