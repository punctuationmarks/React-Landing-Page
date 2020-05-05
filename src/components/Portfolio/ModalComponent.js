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
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="modal-subtitle">{props.subtitle_1}</h4>
        <p>{props.body_1}</p>
        <Image src={props.image_a} fluid className="p-2 modal-image" />
        <Image src={props.image_b} fluid className="p-2 modal-image" />
        <Image src={props.image_c} fluid className="p-2 modal-image" />

        <h4 className="modal-subtitle">{props.subtitle_2}</h4>
        <p>{props.body_2}</p>

        <Image src={props.image_d} fluid className="p-2 modal-image" />
        <Image src={props.image_e} fluid className="p-2 modal-image" />
        <Image src={props.image_f} fluid className="p-2 modal-image" />

        <Image src={props.image_g} fluid className="p-2 modal-image" />
        <Image src={props.image_h} fluid className="p-2 modal-image" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
