import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

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

        <LazyLoadImage effect="blur" src={props.image_a} className="modal-image" />
        <LazyLoadImage effect="blur" src={props.image_b} className="modal-image" />
        <LazyLoadImage effect="blur" src={props.image_c} fluid className="modal-image" />

        <h4 className="modal-subtitle">{props.subtitle_2}</h4>
        <p>{props.body_2}</p>

        <LazyLoadImage effect="blur" src={props.image_d} fluid className="modal-image" />
        <LazyLoadImage effect="blur" src={props.image_e} fluid className="modal-image" />
        <LazyLoadImage effect="blur" src={props.image_f} fluid className="modal-image" />
        <LazyLoadImage effect="blur" src={props.image_g} fluid className="modal-image" />

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
