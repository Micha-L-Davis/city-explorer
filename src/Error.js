import React from "react";
import Modal from "react-bootstrap/Modal"

class Error extends React.Component {
    render(){
        return(
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Error!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>The request you submitted is invalid. Please enter a <em>real world</em> place name and ensure it is spelled correctly.</p>
                </Modal.Body>
                <Modal.Footer>
                    <p color="gray">{this.props.errorMessage}</p>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default Error;
