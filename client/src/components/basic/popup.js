import React from 'react';
import MaterialTable from 'material-table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/*************************
* Popup for adding stuff to db
* Outdated by backend table but keeping in for fun
*************************/
class PopupAdd extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }


  setShow() {
    let show = this.state.show;
    this.setState({show:!show});
  }

  render(props){
      return(
        <div>
          <Button variant="primary" onClick={this.setShow()}>
            Launch static backdrop modal
          </Button>

          <Modal
            show={this.state.show}
            onHide={this.setShow()}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.setShow()}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </div>
       );
  }
}
export default Modal;
