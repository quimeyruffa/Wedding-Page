import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import esquina from "../../WeddingAssets/esquina_card.svg";

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-location">
        <div
          className="modal-content box-bordes-adorno"
          style={{ border: "1px solid #ba9972" }}
        >
          <div className="modal-content-2 box-color-col">
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you are reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </div>
          <img
            // onLoad={handleSVGLoad}
            src={esquina}
            alt="esquina"
            className={` adorno-esquina adorno-esquina-0`}
          />
          <img
            // onLoad={handleSVGLoad}
            src={esquina}
            alt="esquina1"
            className={` adorno-esquina adorno-esquina-1`}
          />
          <img
            // onLoad={handleSVGLoad}
            src={esquina}
            alt="esquina2"
            className={` adorno-esquina adorno-esquina-2`}
          />
          <img
            // onLoad={handleSVGLoad}
            src={esquina}
            alt="esquina3"
            className={` adorno-esquina adorno-esquina-3`}
          />
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
