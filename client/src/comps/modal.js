import React from 'react';
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

/*************************
* Landing page for user
*************************/
class Modal extends React.Component{

  constructor(props) {
    super(props);
  }

  mouseEnter(e) {
    e.preventDefault();
    e.target.style.color = 'black'
    e.target.style.textDecoration = 'none'
    e.target.style.cursor = 'pointer'

  }
  mouseLeave(e) {
    e.preventDefault();
    e.target.style.color = '#aaa';
  }

  handleClick(e) {
    e.preventDefault();
    this.props.close();
  }

  render(props) {
    let disp = this.props.open ? modal : modalOff;
    return (
      <div id="myModal" style={disp}>
        <div style={modalContent}>
          <button style={close}
            onClick={(e) => this.handleClick(e)}
            onMouseEnter={(e) => this.mouseEnter(e)}
            onMouseLeave={(e) => this.mouseLeave(e)}>
            &times;
          </button><br /><br />
          {this.props.modalBody}
        </div>
      </div>
    )
  }
}
export default Modal
