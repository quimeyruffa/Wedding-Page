import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { Presentation } from "./components/Presentation";
import Home from "./components/Home/Home";
import portada from "./portada.png";
import { ModalComponent } from "./components/ModalInvite";
function App() {
  const [loading, setLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const totalSVGs = 6; // Cambia esto al número de SVGs que tienes
  const handleSVGLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadedCount === totalSVGs) {
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [loadedCount]);

  const handleModal = () => {
    switch (modal) {
      case "invite":
        return <ModalComponent setModal={setModal} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div style={{ display: loading ? "" : "none" }}>
        <Loader />
      </div>
      <div style={{ display: loading || show ? "none" : "" }}>
        <Presentation handleSVGLoad={handleSVGLoad} setShow={setShow} />
      </div>

      {show && !modal && <Home imageUrl={portada} setModal={setModal} />}
      {handleModal()}
    </>
  );
}

export default App;
