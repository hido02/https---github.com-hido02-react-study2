import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";

const HomeworkModal = (props) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.group.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <h2>기간</h2>
            {props.group.term}
            <h2>상세 설명</h2>
            {props.group.description}
            </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default HomeworkModal;