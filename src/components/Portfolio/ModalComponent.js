import React, { useState } from "react";
import { Modal, Button, Image } from 'react-bootstrap';


function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.subtitle}</h4>
        <p>{props.body}</p>
        <Image src={props.image_a} fluid className="p-2" />
        <Image src={props.image_b} fluid className="p-2" />
        <Image src={props.image_c} fluid className="p-2" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
