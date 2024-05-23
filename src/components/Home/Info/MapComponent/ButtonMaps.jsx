const ButtonMaps = () => {
  const lat = 37.7749; // Latitud de ejemplo
  const lng = -122.4194; // Longitud de ejemplo

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="info-col">
      <div className="info-box">
        <h6>Dirección</h6>
        <p>Av. Pergamino 203 - BsAs</p>
        <button
          className="boton modal-como-llegar"
          onClick={openInGoogleMaps}
          style={{ border: 0 }}
        >
          ¿Cómo llegar?
        </button>
      </div>
    </div>
  );
};

export default ButtonMaps;
