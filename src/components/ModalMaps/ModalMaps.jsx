import { useState } from "react";
import adorno from "../../WeddingAssets/adorno_card_modal.svg";
import compromiso from "../../WeddingAssets/compromiso_corazon.svg";
import esquina from "../../WeddingAssets/esquina_card.svg";
import { motion } from "framer-motion";
import srcMapa from "../../WeddingAssets/mapa.png";
function ModalMaps({ setModal }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      id="modalAsistencia"
      className="modal fade show"
      tabindex="-1"
      style={{ display: "block", paddingRight: 10, backgroundColor: "#2F2F2F" }}
      aria-modal="true"
      role="dialog"
    >
      <motion.div
        transition={{ ease: "easeOut", duration: 1 }}
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="modal-dialog modal-md modal-dialog-centered"
      >
        <div
          className="modal-content box-bordes-adorno"
          style={{ border: "1px solid #ba9972", background: "rgb(47, 47, 47)" }}
        >
          <div className="modal-content-2 box-color-col">
            <div className="img-top-modal d-flex justify-content-center align-items-start">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setModal(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
              <img
                // onLoad={handleSVGLoad}
                src={compromiso}
                alt="icon-ceremonia"
                className=" modal-icon icon-ceremonia"
              />
            </div>
            <div className="modal-header">
              <h5 className="modal-title">Cómo llegar a la Ceremonia</h5>
              <img
                style={{ width: "100%", height: "100%" }}
                // onLoad={handleSVGLoad}
                src={adorno}
                alt="icon-adorno"
                className=" adorno-titulo "
              />
            </div>

            <div className="modal-body">
              <img src={srcMapa} alt="srcMapa" />
            </div>

            <div className="modal-footer">
              <button type="button" id="sendAsistencia" className="boton">
                Ampliar mapa
              </button>
            </div>
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
      </motion.div>
    </div>
  );
}

export default ModalMaps;
