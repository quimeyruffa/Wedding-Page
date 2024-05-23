import { motion } from "framer-motion";
import React from "react";
import adorno from "../../WeddingAssets/adorno.svg";
import ampersand from "../../WeddingAssets/ampersand.svg";
import EsquinaIzquierda from "../../WeddingAssets/esquina.svg";
import style from "./Presentation.module.css";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

function Presentation({ handleSVGLoad, setShow }) {
  return (
    <>
      <div className="inv-container container">
        <div
          id="modalMusica"
          className={`${style["container-presentation"]} modal fade show`}
        >
          <motion.div
            style={{ width: "100%" }}
            transition={{ ease: "easeOut", duration: 5 }}
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content modal">
                <img
                  onLoad={handleSVGLoad}
                  src={EsquinaIzquierda}
                  alt="esquina izquierda"
                  className={`adorno-esquina-0 adorno-esquina`}
                />
                <img
                  onLoad={handleSVGLoad}
                  src={EsquinaIzquierda}
                  alt="esquina derecha"
                  className={`adorno-esquina-1 adorno-esquina`}
                />
                <img
                  onLoad={handleSVGLoad}
                  src={EsquinaIzquierda}
                  alt="esquina izquierda 1"
                  className={`adorno-esquina-2 adorno-esquina`}
                />
                <img
                  onLoad={handleSVGLoad}
                  src={EsquinaIzquierda}
                  alt="esquina derecha 2"
                  className={`adorno-esquina-3 adorno-esquina`}
                />
                <div className="modal-body text-center">
                  <p className="bienvenida-modal-musica">
                    Bienvenidos a la invitación de{" "}
                  </p>
                  <div className="nombres-modal-musica">
                    <div className="iniciales">
                      <span>D</span>
                      <img
                        onLoad={handleSVGLoad}
                        style={{ width: 71.61, height: 58.25 }}
                        src={ampersand}
                        alt="&"
                        className="injectable ampersand-portada"
                      />
                      <span>G</span>
                    </div>
                    <div className="nombres">
                      <p>Danny & Gabi</p>
                    </div>
                    <img
                      onLoad={handleSVGLoad}
                      src={adorno}
                      className="injectable adorno adorno-modal-musica"
                      alt="adorno"
                    />
                  </div>
                  <span className="aclara-musica">
                    La música de fondo es parte de la experiencia
                  </span>
                 <AudioPlayer setShow={setShow}/>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
