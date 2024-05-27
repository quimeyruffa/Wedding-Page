import React from "react";

const ConfirmInvite = ({ setModal }) => {
  return (
    <div className="info-col">
      <div className="info-box">
        <h6>Lugar</h6>
        <p>Parroquia Nuestra Señora de Lujan</p>
        <button
          className="boton confirmar-asistencia"
          onClick={() => setModal("invite")}
          style={{ border: 0 }}
        >
          Confirmar asistencia
        </button>
      </div>
    </div>
  );
};

export default ConfirmInvite;
