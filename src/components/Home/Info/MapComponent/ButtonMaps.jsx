const ButtonMaps = () => {
  const lat = -34.5444819; // Latitud de ejemplo
  const lng = -58.4593651; // Longitud de ejemplo

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="info-col">
      <div className="info-box">
        <h6>Dirección</h6>
        <p>Jano's Nuñez, Av. del Libertador 7501</p>
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
